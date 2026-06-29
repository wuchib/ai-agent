import { Button } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Input } from "./input";
import { Label } from "./label";
import { Separator } from "./separator";

type ShowcaseStat = {
  label: string;
  value: string;
  note: string;
};

export type ShadcnShowcaseProps = {
  appName: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: string;
  secondaryAction: string;
  fieldLabel: string;
  fieldPlaceholder: string;
  helperLabel: string;
  helperPlaceholder: string;
  stats: ShowcaseStat[];
};

export function ShadcnShowcase({
  appName,
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  fieldLabel,
  fieldPlaceholder,
  helperLabel,
  helperPlaceholder,
  stats,
}: ShadcnShowcaseProps) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(79,124,255,0.16),_transparent_36%),linear-gradient(180deg,_#f8fafc,_#eef2ff_100%)] text-slate-950 dark:bg-[radial-gradient(circle_at_top_left,_rgba(79,124,255,0.18),_transparent_36%),linear-gradient(180deg,_#020617,_#0f172a_100%)] dark:text-slate-50">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-100">
          <span className="rounded-full border border-brand-500/20 bg-brand-50 px-3 py-1 dark:bg-brand-500/10">
            {eyebrow}
          </span>
          <span>{appName}</span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.7fr)]">
          <Card className="border-slate-200/80 bg-white/90 shadow-xl shadow-slate-900/5 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/90">
            <CardHeader className="space-y-3">
              <CardTitle className="max-w-2xl text-3xl tracking-tight sm:text-4xl">
                {title}
              </CardTitle>
              <CardDescription className="max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
                {description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor={`${appName}-primary`}>{fieldLabel}</Label>
                  <Input
                    id={`${appName}-primary`}
                    placeholder={fieldPlaceholder}
                    defaultValue={`${appName} workspace`}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`${appName}-secondary`}>{helperLabel}</Label>
                  <Input
                    id={`${appName}-secondary`}
                    placeholder={helperPlaceholder}
                    defaultValue={`${appName}@example.com`}
                  />
                </div>
              </div>

              <Separator />

              <div className="flex flex-wrap gap-3">
                <Button>{primaryAction}</Button>
                <Button variant="outline">{secondaryAction}</Button>
                <Button variant="ghost">Preview changes</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200/80 bg-white/90 shadow-xl shadow-slate-900/5 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/90">
            <CardHeader>
              <CardTitle className="text-xl">Validation snapshot</CardTitle>
              <CardDescription>
                This panel exercises the shared primitives inside both apps.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {stats.map((stat, index) => (
                <div key={stat.label} className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                        {stat.label}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {stat.note}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-brand-700 dark:text-brand-100">
                      {stat.value}
                    </span>
                  </div>
                  {index < stats.length - 1 ? <Separator /> : null}
                </div>
              ))}
            </CardContent>

            <CardFooter className="flex flex-col items-stretch gap-3 sm:flex-row">
              <Button className="w-full sm:w-auto">Open {appName}</Button>
              <Button className="w-full sm:w-auto" variant="secondary">
                Share link
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
