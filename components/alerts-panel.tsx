"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle2, XCircle, Clock } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

interface AlertsPanelProps {
  riskLevel: number
  currentActivity: string
}

export function AlertsPanel({ riskLevel, currentActivity }: AlertsPanelProps) {
  const alerts = [
    {
      id: 1,
      type: riskLevel > 60 ? "critical" : "info",
      message: riskLevel > 60 ? "High risk behavior detected" : "System operating normally",
      activity: currentActivity,
      timestamp: "Just now",
    },
    {
      id: 2,
      type: "warning",
      message: "Attention deviation detected",
      activity: "Looking Away",
      timestamp: "12s ago",
    },
    {
      id: 3,
      type: "info",
      message: "Normal driving resumed",
      activity: "Normal Driving",
      timestamp: "45s ago",
    },
    {
      id: 4,
      type: "critical",
      message: "Eyes closed for extended period",
      activity: "Eyes Closed",
      timestamp: "1m ago",
    },
    {
      id: 5,
      type: "warning",
      message: "Phone usage detected",
      activity: "Looking at Phone",
      timestamp: "2m ago",
    },
  ]

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "critical":
        return <XCircle className="h-4 w-4 text-red-500" />
      case "warning":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />
      default:
        return <CheckCircle2 className="h-4 w-4 text-green-500" />
    }
  }

  const getAlertBadge = (type: string) => {
    switch (type) {
      case "critical":
        return <Badge variant="destructive">Critical</Badge>
      case "warning":
        return <Badge className="bg-yellow-500 text-white hover:bg-yellow-600">Warning</Badge>
      default:
        return <Badge variant="secondary">Info</Badge>
    }
  }

  return (
    <Card className="overflow-hidden">
      <div className="border-b border-border bg-muted/30 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-semibold text-foreground">System Alerts</h3>
          </div>
          <Badge variant="outline">{alerts.length}</Badge>
        </div>
      </div>

      <ScrollArea className="h-[400px]">
        <div className="p-6 space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="rounded-lg border border-border bg-card p-4 space-y-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {getAlertIcon(alert.type)}
                  <span className="text-sm font-medium text-foreground">{alert.message}</span>
                </div>
                {getAlertBadge(alert.type)}
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {alert.timestamp}
                </span>
                <span>Activity: {alert.activity}</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  )
}
