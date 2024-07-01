import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Index() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Welcome to Class Attendance Tool</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">
            Use the sidebar to navigate through the features.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}

export default Index;