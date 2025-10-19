"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Eye, Brain, Zap, TrendingUp } from "lucide-react"
import { LiveFeedPanel } from "@/components/live-feed-panel"
import { ActivityRecognitionPanel } from "@/components/activity-recognition-panel"
import { RiskMonitorPanel } from "@/components/risk-monitor-panel"
import { PerformanceMetrics } from "@/components/performance-metrics"
import { SystemArchitecture } from "@/components/system-architecture"
import { AlertsPanel } from "@/components/alerts-panel"

export default function DriverMonitoringDashboard() {
  const [isMonitoring, setIsMonitoring] = useState(true)
  const [currentActivity, setCurrentActivity] = useState("Normal Driving")
  const [riskLevel, setRiskLevel] = useState(15)

  // Simulate real-time updates
  useEffect(() => {
    if (!isMonitoring) return

    const interval = setInterval(() => {
      const activities = [
        "Normal Driving",
        "Looking at Phone",
        "Adjusting Radio",
        "Drinking Water",
        "Yawning",
        "Eyes Closed",
        "Looking Away",
      ]
      const risks = [15, 75, 45, 25, 60, 85, 55]

      const randomIndex = Math.floor(Math.random() * activities.length)
      setCurrentActivity(activities[randomIndex])
      setRiskLevel(risks[randomIndex])
    }, 3000)

    return () => clearInterval(interval)
  }, [isMonitoring])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Eye className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-foreground">Driver State Monitor</h1>
                <p className="text-sm text-muted-foreground">Real-time Activity Recognition System</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div
                  className={`h-2 w-2 rounded-full ${isMonitoring ? "bg-green-500 animate-pulse" : "bg-gray-500"}`}
                />
                <span className="text-sm text-muted-foreground">{isMonitoring ? "Live" : "Paused"}</span>
              </div>
              <Button variant={isMonitoring ? "destructive" : "default"} onClick={() => setIsMonitoring(!isMonitoring)}>
                {isMonitoring ? "Stop Monitoring" : "Start Monitoring"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-6">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="metrics">Metrics</TabsTrigger>
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Top Row - Live Feed and Activity Recognition */}
            <div className="grid gap-6 lg:grid-cols-2">
              <LiveFeedPanel isMonitoring={isMonitoring} />
              <ActivityRecognitionPanel currentActivity={currentActivity} isMonitoring={isMonitoring} />
            </div>

            {/* Middle Row - Risk Monitor and Alerts */}
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <RiskMonitorPanel riskLevel={riskLevel} currentActivity={currentActivity} />
              </div>
              <AlertsPanel riskLevel={riskLevel} currentActivity={currentActivity} />
            </div>

            {/* Bottom Row - Quick Stats */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Recognition Accuracy</p>
                    <p className="mt-2 text-3xl font-bold text-foreground">94.2%</p>
                    <p className="mt-1 text-xs text-green-500">+35% vs baseline</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                    <Brain className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Processing Latency</p>
                    <p className="mt-2 text-3xl font-bold text-foreground">42ms</p>
                    <p className="mt-1 text-xs text-green-500">-40% reduction</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
                    <Zap className="h-6 w-6 text-green-500" />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Predictive Precision</p>
                    <p className="mt-2 text-3xl font-bold text-foreground">87.5%</p>
                    <p className="mt-1 text-xs text-green-500">+20% improvement</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
                    <TrendingUp className="h-6 w-6 text-purple-500" />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">System Uptime</p>
                    <p className="mt-2 text-3xl font-bold text-foreground">98.7%</p>
                    <p className="mt-1 text-xs text-green-500">Target: 95%</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
                    <Activity className="h-6 w-6 text-emerald-500" />
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="metrics" className="space-y-6">
            <PerformanceMetrics />
          </TabsContent>

          <TabsContent value="architecture" className="space-y-6">
            <SystemArchitecture />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
