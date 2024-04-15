import { Terminal } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function Page() {
  return (
    <div className="">
      {/* <PricingPage /> */}
      <br />
      <a href="/ja">日本語ページ</a>
      <br />
      <a href="/en">English Page</a>
      <Alert>
        <Terminal className="w-4 h-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>
  );
}
