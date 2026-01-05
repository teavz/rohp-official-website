"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

interface CommitteeMemberModalProps {
  member: {
    name: string
    pronouns: string
    major: string
    classYear: string
    bio: string
    image: string
    email?: string
  }
  isOpen: boolean
  onClose: () => void
}

export function CommitteeMemberModal({ member, isOpen, onClose }: CommitteeMemberModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">About {member.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="relative h-32 w-32 flex-shrink-0 rounded-full overflow-hidden bg-muted mx-auto sm:mx-0">
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="h-full w-full object-cover" />
            </div>
            <div className="text-center sm:text-left flex-1">
              <h3 className="text-2xl font-bold mb-1" style={{ color: "#003262" }}>
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">{member.pronouns}</p>
              <p className="font-semibold mb-1">{member.major}</p>
              <p className="text-sm" style={{ color: "#FDB515" }}>
                {member.classYear}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3" style={{ color: "#003262" }}>
              About Me
            </h4>
            <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
          </div>

          {member.email && (
            <div className="pt-4 border-t">
              <Button asChild className="berkeley-blue w-full sm:w-auto">
                <a href={`mailto:${member.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Contact {member.name.split(" ")[0]}
                </a>
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
