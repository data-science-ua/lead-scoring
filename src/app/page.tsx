"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const companySizeOptions = [
  { label: '< 50 employees', value: 1 },
  { label: '50 – 100 employees', value: 2 },
  { label: '101 – 500 employees', value: 3 },
  { label: '501 – 1 000 employees', value: 4 },
  { label: '> 1 000 employees', value: 5 },
];

const jobTitleOptions = [
  { label: 'Individual Contributor', value: 1 },
  { label: 'Manager / Team Lead', value: 2 },
  { label: 'Director', value: 3 },
  { label: 'Vice President', value: 4 },
  { label: 'C-suite (CEO, CTO, etc.)', value: 5 },
];

const urgencyOptions = [
  { label: 'No defined timeline', value: 1 },
  { label: 'Planning in 6–12 months', value: 2 },
  { label: 'Planning in 3–6 months', value: 3 },
  { label: 'Planning in 1–3 months', value: 4 },
  { label: 'Starting within 1 month', value: 5 },
];

const potentialRevenueOptions = [
  { label: '< $5 000', value: 1 },
  { label: '$5 000 – $10 000', value: 2 },
  { label: '$10 000 – $20 000', value: 3 },
  { label: '$20 000 – $50 000', value: 4 },
  { label: '> $50 000', value: 5 },
];

const leadSourceOptions = [
  { label: 'Cold Outbound', value: 1 },
  { label: 'Website Inquiry', value: 2 },
  { label: 'Network Introduction', value: 3 },
  { label: 'Referral', value: 4 },
  { label: 'Existing Client', value: 5 },
];

function ScoringGuide() {
  return (
    <Card className="h-fit max-h-[600px] overflow-y-auto scrollbar">
      <CardHeader>
        <CardTitle>Lead Scoring Guide</CardTitle>
        <CardDescription>Understanding the scoring weights and criteria</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">Company Size (Weight: 1.5x)</h3>
            <div className="space-y-1 text-sm">
              {companySizeOptions.map(option => (
                <div key={option.value} className="flex justify-between">
                  <span>{option.label}</span>
                  <span className="font-mono">{option.value} pt</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Job Title (Weight: 1x)</h3>
            <div className="space-y-1 text-sm">
              {jobTitleOptions.map(option => (
                <div key={option.value} className="flex justify-between">
                  <span>{option.label}</span>
                  <span className="font-mono">{(option.value * 1.5).toFixed(1)} pt</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Urgency (Weight: 2x)</h3>
            <div className="space-y-1 text-sm">
              {urgencyOptions.map(option => (
                <div key={option.value} className="flex justify-between">
                  <span>{option.label}</span>
                  <span className="font-mono">{(option.value * 2).toFixed(1)} pt</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Potential Revenue (Weight: 2x)</h3>
            <div className="space-y-1 text-sm">
              {potentialRevenueOptions.map(option => (
                <div key={option.value} className="flex justify-between">
                  <span>{option.label}</span>
                  <span className="font-mono">{(option.value * 2).toFixed(1)} pt</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Lead Source (Weight: 1x)</h3>
            <div className="space-y-1 text-sm">
              {leadSourceOptions.map(option => (
                <div key={option.value} className="flex justify-between">
                  <span>{option.label}</span>
                  <span className="font-mono">{option.value} pt</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <h3 className="font-semibold  text-lg mb-2">Score Tiers</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="flex items-center gap-2">
                <span className="text-red-500">🔥 Hot</span>
              </span>
              <span className="font-mono">{'>'} 25 pts</span>
            </div>
            <div className="flex justify-between">
              <span className="flex items-center gap-2">
                <span className="text-yellow-500">🌤️ Warm</span>
              </span>
              <span className="font-mono">15 - 25 pts</span>
            </div>
            <div className="flex justify-between">
              <span className="flex items-center gap-2">
                <span className="text-blue-500">🥶 Cold</span>
              </span>
              <span className="font-mono">{'<'} 15 pts</span>
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <h3 className="font-semibold text-lg mb-2">Maximum Possible Score</h3>
          <div className="text-sm space-y-1">
            <div className="flex justify-between">
              <span>Company Size (5 × 1)</span>
              <span className="font-mono">5 pts</span>
            </div>
            <div className="flex justify-between">
              <span>Job Title (5 × 1.5)</span>
              <span className="font-mono">7.5 pts</span>
            </div>
            <div className="flex justify-between">
              <span>Urgency (5 × 2)</span>
              <span className="font-mono">10 pts</span>
            </div>
            <div className="flex justify-between">
              <span>Potential Revenue (5 × 2)</span>
              <span className="font-mono">10 pts</span>
            </div>
            <div className="flex justify-between">
              <span>Lead Source (5 × 1)</span>
              <span className="font-mono">5 pts</span>
            </div>
            <div className="border-t pt-1 flex justify-between font-semibold">
              <span>Total Maximum</span>
              <span className="font-mono">37.5 pts</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function LeadScoringPage() {
  const [companySize, setCompanySize] = useState(1);
  const [jobTitle, setJobTitle] = useState(1);
  const [urgency, setUrgency] = useState(1);
  const [potentialRevenue, setPotentialRevenue] = useState(1);
  const [leadSource, setLeadSource] = useState(1);
  const [score, setScore] = useState<number | null>(null);
  const [tier, setTier] = useState<string | null>(null);

  const calculateScore = () => {
    const total =
      companySize * 1.5 +
      jobTitle * 1 +
      urgency * 2 +
      potentialRevenue * 2 +
      leadSource * 1;
    setScore(total);
    if (total > 25) setTier('Tier 1 🔥');
    else if (total >= 15) setTier('Tier 2 🌤️');
    else setTier('Tier 3 🥶');
  };

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Lead Scoring Calculator</h1>
          <p className="text-gray-200">Evaluate your leads with our comprehensive scoring system</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form on the left */}
          <Card className='max-h-[600px] overflow-y-auto'>
            <CardHeader>
              <CardTitle>Calculate Lead Score</CardTitle>
              <CardDescription>Select parameters to calculate your lead score.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="companySize">Company Size</Label>
                <Select onValueChange={val => setCompanySize(Number(val))} defaultValue="1">
                  <SelectTrigger id="companySize">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {companySizeOptions.map(opt => (
                      <SelectItem key={opt.value} value={opt.value.toString()}>{opt.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="jobTitle">Job Title</Label>
                <Select onValueChange={val => setJobTitle(Number(val))} defaultValue="1">
                  <SelectTrigger id="jobTitle">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {jobTitleOptions.map(opt => (
                      <SelectItem key={opt.value} value={opt.value.toString()}>{opt.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="urgency">Urgency</Label>
                <Select onValueChange={val => setUrgency(Number(val))} defaultValue="1">
                  <SelectTrigger id="urgency">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {urgencyOptions.map(opt => (
                      <SelectItem key={opt.value} value={opt.value.toString()}>{opt.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="potentialRevenue">Potential Revenue</Label>
                <Select onValueChange={val => setPotentialRevenue(Number(val))} defaultValue="1">
                  <SelectTrigger id="potentialRevenue">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {potentialRevenueOptions.map(opt => (
                      <SelectItem key={opt.value} value={opt.value.toString()}>{opt.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="leadSource">Lead Source</Label>
                <Select onValueChange={val => setLeadSource(Number(val))} defaultValue="1">
                  <SelectTrigger id="leadSource">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {leadSourceOptions.map(opt => (
                      <SelectItem key={opt.value} value={opt.value.toString()}>{opt.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={calculateScore} className="w-full">Calculate Score</Button>

              {score !== null && (
                <div className="mt-4 text-center p-2 rounded-lg">
                  <p className="text-xl font-semibol">Score: {score.toFixed(1)}</p>
                  <p className="text-lg">{tier}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Guide on the right */}
          <ScoringGuide />
        </div>
      </div>
    </div>
  );
}
