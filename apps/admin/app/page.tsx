import type { ReactElement } from 'react'

import { ShadcnShowcase } from '@repo/ui/shadcn-showcase'

export default function Home(): ReactElement {
  return (
    <ShadcnShowcase
      appName="admin"
      eyebrow="Admin console preview"
      title="Shared primitives, now exercised in the admin app"
      description="The admin route uses the same shadcn/ui building blocks to prove the shared package works across both apps without duplication."
      primaryAction="Invite member"
      secondaryAction="Review access"
      fieldLabel="Team name"
      fieldPlaceholder="Platform Ops"
      helperLabel="Invite email"
      helperPlaceholder="teammate@company.com"
      stats={[
        {
          label: "Shared package",
          value: "@repo/ui",
          note: "Same primitives are imported here and in web.",
        },
        {
          label: "Coverage",
          value: "5 comps",
          note: "Button, Card, Input, Label, and Separator are all exercised.",
        },
        {
          label: "Verification",
          value: "Live",
          note: "Both apps now render the new UI layer directly.",
        },
      ]}
    />
  )
}
