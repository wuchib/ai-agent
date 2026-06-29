import type { ReactElement } from 'react'

import { ShadcnShowcase } from '@repo/ui/shadcn-showcase'

export default function Home(): ReactElement {
  return (
    <ShadcnShowcase
      appName="web"
      eyebrow="Web app preview"
      title="A shared shadcn/ui surface for product work"
      description="This page verifies Button, Card, Input, Label, and Separator rendered from the shared UI package inside the web app."
      primaryAction="Create dashboard"
      secondaryAction="Save draft"
      fieldLabel="Workspace name"
      fieldPlaceholder="Acme Studio"
      helperLabel="Owner email"
      helperPlaceholder="owner@acme.dev"
      stats={[
        {
          label: "Component source",
          value: "@repo/ui",
          note: "All primitives come from the shared package.",
        },
        {
          label: "Tailwind layer",
          value: "v4",
          note: "Styles are driven by the existing workspace Tailwind setup.",
        },
        {
          label: "Validation goal",
          value: "Pass",
          note: "This view makes the new primitives render in a real app.",
        },
      ]}
    />
  )
}
