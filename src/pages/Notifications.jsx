import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

function Notifications() {
  const [message, setMessage] = useState("");

  const handleSendNotification = () => {
    toast("Notification sent successfully!");
    setMessage("");
  };

  return (
    <main className="flex flex-1 flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Send Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <Label htmlFor="message">Message</Label>
            <Input
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
            />
            <Button className="mt-4 w-full" onClick={handleSendNotification}>
              Send Notification
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

export default Notifications;