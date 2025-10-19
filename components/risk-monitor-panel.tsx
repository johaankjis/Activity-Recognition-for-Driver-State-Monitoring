"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, TrendingUp } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface RiskMonitorPanelProps {
  riskLevel: number
  currentActivity: string
}

export function RiskMonitorPanel({ riskLevel, currentActivity }: RiskMonitorPanelProps) {
  const getRiskColor = (level: number) => {
    if (level < 30) return "text-green-500"
    if (level < 60) return "text-yellow-500"
    return "text-red-500"
  }

  const getRiskBgColor = (level: number) => {
    if (level < 30) return "bg-green-500/10"
    if (level < 60) return "bg-yellow-500/10"
    return "bg-red-500/10"
  }

  const getRiskLabel = (level: number) => {
    if (level < 30) return "Low Risk"
    if (level < 60) return "Medium Risk"
    return "High Risk"
  }

  const riskFactors = [
    {
      name: "Distraction Level",
      value: currentActivity.includes("Phone") ? 85 : currentActivity.includes("Radio") ? 45 : 15,
    },
    {
      name: "Fatigue Indicators",
      value: currentActivity.includes("Yawning") || currentActivity.includes("Eyes Closed") ? 75 : 20,
    },
    { name: "Attention Deviation", value: currentActivity.includes("Looking Away") ? 70 : 10 },
    { name: "Response Time", value: riskLevel > 60 ? 65 : 25 },
  ]

  return (
    <Card className="overflow-hidden">
      <div className="border-b border-border bg-muted/30 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-semibold text-foreground">Risk Assessment</h3>
          </div>
          <Badge variant="outline" className="gap-1">
            <TrendingUp className="h-3 w-3" />
            Behavior Modeling
          </Badge>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6 flex items-center justify-between rounded-lg border border-border bg-muted/30 p-6">
          <div>
            <p className="text-sm text-muted-foreground">Overall Risk Level</p>
            <p className={`mt-2 text-4xl font-bold ${getRiskColor(riskLevel)}`}>{riskLevel}%</p>
            <p className="mt-1 text-sm font-medium text-muted-foreground">{getRiskLabel(riskLevel)}</p>
          </div>
          <div className={`flex h-24 w-24 items-center justify-center rounded-full ${getRiskBgColor(riskLevel)}`}>
            <AlertTriangle className={`h-12 w-12 ${getRiskColor(riskLevel)}`} />
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-medium text-muted-foreground">Risk Factors</p>
          {riskFactors.map((factor) => (
            <div key={factor.name} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-foreground">{factor.name}</span>
                <span
                  className={
                    factor.value > 60
                      ? "font-medium text-red-500"
                      : factor.value > 30
                        ? "text-yellow-500"
                        : "text-green-500"
                  }
                >
                  {factor.value}%
                </span>
              </div>
              <Progress value={factor.value} className="h-2" />
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-lg border border-blue-500/20 bg-blue-500/5 p-4">
          <p className="text-sm text-blue-500">
            <span className="font-semibold">Predictive Insight:</span> Based on current behavior patterns, risk level
            may {riskLevel > 50 ? "increase" : "remain stable"} in the next 30 seconds.
          </p>
        </div>
      </div>
    </Card>
  )
}
