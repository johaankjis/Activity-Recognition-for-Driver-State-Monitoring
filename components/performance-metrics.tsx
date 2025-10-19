"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Zap, TrendingUp, Activity } from "lucide-react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

const accuracyData = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  accuracy: 85 + Math.random() * 10,
  baseline: 70,
}))

const latencyData = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  latency: 35 + Math.random() * 15,
  target: 70,
}))

const precisionData = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  precision: 75 + Math.random() * 15,
  baseline: 70,
}))

const uptimeData = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  uptime: 94 + Math.random() * 5,
  target: 95,
}))

export function PerformanceMetrics() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="overflow-hidden">
          <div className="border-b border-border bg-muted/30 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-500" />
                <h3 className="font-semibold text-foreground">Recognition Accuracy</h3>
              </div>
              <Badge variant="outline" className="bg-green-500/10 text-green-500">
                +35%
              </Badge>
            </div>
          </div>
          <div className="p-6">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={accuracyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[60, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line type="monotone" dataKey="accuracy" stroke="#3b82f6" strokeWidth={2} dot={false} />
                <Line
                  type="monotone"
                  dataKey="baseline"
                  stroke="#6b7280"
                  strokeWidth={1}
                  strokeDasharray="5 5"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Current: 94.2%</span>
              <span className="text-muted-foreground">Baseline: 70%</span>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <div className="border-b border-border bg-muted/30 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-green-500" />
                <h3 className="font-semibold text-foreground">Processing Latency</h3>
              </div>
              <Badge variant="outline" className="bg-green-500/10 text-green-500">
                -40%
              </Badge>
            </div>
          </div>
          <div className="p-6">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={latencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line type="monotone" dataKey="latency" stroke="#10b981" strokeWidth={2} dot={false} />
                <Line
                  type="monotone"
                  dataKey="target"
                  stroke="#6b7280"
                  strokeWidth={1}
                  strokeDasharray="5 5"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Current: 42ms</span>
              <span className="text-muted-foreground">Target: &lt;70ms</span>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <div className="border-b border-border bg-muted/30 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-purple-500" />
                <h3 className="font-semibold text-foreground">Predictive Precision</h3>
              </div>
              <Badge variant="outline" className="bg-green-500/10 text-green-500">
                +20%
              </Badge>
            </div>
          </div>
          <div className="p-6">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={precisionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[60, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line type="monotone" dataKey="precision" stroke="#a855f7" strokeWidth={2} dot={false} />
                <Line
                  type="monotone"
                  dataKey="baseline"
                  stroke="#6b7280"
                  strokeWidth={1}
                  strokeDasharray="5 5"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Current: 87.5%</span>
              <span className="text-muted-foreground">Baseline: 70%</span>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <div className="border-b border-border bg-muted/30 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-emerald-500" />
                <h3 className="font-semibold text-foreground">System Uptime</h3>
              </div>
              <Badge variant="outline" className="bg-green-500/10 text-green-500">
                Above Target
              </Badge>
            </div>
          </div>
          <div className="p-6">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={uptimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[90, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line type="monotone" dataKey="uptime" stroke="#10b981" strokeWidth={2} dot={false} />
                <Line
                  type="monotone"
                  dataKey="target"
                  stroke="#6b7280"
                  strokeWidth={1}
                  strokeDasharray="5 5"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Current: 98.7%</span>
              <span className="text-muted-foreground">Target: 95%</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
