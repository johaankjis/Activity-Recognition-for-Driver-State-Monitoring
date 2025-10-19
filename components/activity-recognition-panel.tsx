"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Brain, TrendingUp } from "lucide-react"

interface ActivityRecognitionPanelProps {
  currentActivity: string
  isMonitoring: boolean
}

const activityConfidences = {
  "Normal Driving": 95,
  "Looking at Phone": 88,
  "Adjusting Radio": 82,
  "Drinking Water": 90,
  Yawning: 85,
  "Eyes Closed": 92,
  "Looking Away": 87,
}

export function ActivityRecognitionPanel({ currentActivity, isMonitoring }: ActivityRecognitionPanelProps) {
  const confidence = activityConfidences[currentActivity as keyof typeof activityConfidences] || 0

  const activities = [
    { name: "Normal Driving", confidence: currentActivity === "Normal Driving" ? confidence : 5 },
    { name: "Looking at Phone", confidence: currentActivity === "Looking at Phone" ? confidence : 3 },
    { name: "Adjusting Radio", confidence: currentActivity === "Adjusting Radio" ? confidence : 8 },
    { name: "Drinking Water", confidence: currentActivity === "Drinking Water" ? confidence : 4 },
    { name: "Yawning", confidence: currentActivity === "Yawning" ? confidence : 6 },
    { name: "Eyes Closed", confidence: currentActivity === "Eyes Closed" ? confidence : 2 },
    { name: "Looking Away", confidence: currentActivity === "Looking Away" ? confidence : 7 },
  ]

  return (
    <Card className="overflow-hidden">
      <div className="border-b border-border bg-muted/30 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-semibold text-foreground">Activity Recognition</h3>
          </div>
          <Badge variant="outline" className="gap-1">
            <TrendingUp className="h-3 w-3" />
            CNN + LSTM
          </Badge>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6 rounded-lg border border-border bg-muted/30 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Current Activity</p>
              <p className="mt-1 text-2xl font-bold text-foreground">{currentActivity}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Confidence</p>
              <p className="mt-1 text-2xl font-bold text-blue-500">{confidence}%</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-medium text-muted-foreground">Activity Probabilities</p>
          {activities.map((activity) => (
            <div key={activity.name} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span
                  className={
                    activity.name === currentActivity ? "font-medium text-foreground" : "text-muted-foreground"
                  }
                >
                  {activity.name}
                </span>
                <span
                  className={activity.name === currentActivity ? "font-medium text-blue-500" : "text-muted-foreground"}
                >
                  {activity.confidence}%
                </span>
              </div>
              <Progress value={activity.confidence} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
