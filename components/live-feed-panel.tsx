"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Video, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LiveFeedPanelProps {
  isMonitoring: boolean
}

export function LiveFeedPanel({ isMonitoring }: LiveFeedPanelProps) {
  return (
    <Card className="overflow-hidden">
      <div className="border-b border-border bg-muted/30 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Video className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-semibold text-foreground">Live Camera Feed</h3>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={isMonitoring ? "default" : "secondary"}>{isMonitoring ? "Active" : "Inactive"}</Badge>
            <Button variant="ghost" size="icon">
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
        {/* Simulated camera feed */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-48 w-48">
            {/* Driver silhouette */}
            <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-500/50 bg-blue-500/10" />

            {/* Face detection overlay */}
            <div className="absolute left-1/2 top-1/2 h-24 w-20 -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-green-500">
              <div className="absolute -left-1 -top-1 h-3 w-3 border-l-2 border-t-2 border-green-500" />
              <div className="absolute -right-1 -top-1 h-3 w-3 border-r-2 border-t-2 border-green-500" />
              <div className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-green-500" />
              <div className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-green-500" />
            </div>

            {/* Eye tracking points */}
            <div className="absolute left-[35%] top-[40%] h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <div className="absolute right-[35%] top-[40%] h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          </div>
        </div>

        {/* Overlay info */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-lg bg-black/60 px-3 py-2 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-medium text-white">REC</span>
          </div>
          <div className="rounded-lg bg-black/60 px-3 py-2 backdrop-blur-sm">
            <span className="text-xs font-mono text-white">1920x1080 • 30fps</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
