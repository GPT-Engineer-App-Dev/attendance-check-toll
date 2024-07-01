import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

function MarkAttendance() {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", present: false },
    { id: 2, name: "Jane Smith", present: false },
    { id: 3, name: "Alice Johnson", present: false },
  ]);

  const handleAttendance = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };

  const handleSubmit = () => {
    toast("Attendance marked successfully!");
  };

  return (
    <main className="flex flex-1 flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Mark Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          {students.map((student) => (
            <div key={student.id} className="flex items-center justify-between py-2">
              <Label>{student.name}</Label>
              <Button
                variant={student.present ? "primary" : "outline"}
                onClick={() => handleAttendance(student.id)}
              >
                {student.present ? "Present" : "Absent"}
              </Button>
            </div>
          ))}
          <Button className="mt-4 w-full" onClick={handleSubmit}>
            Submit Attendance
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}

export default MarkAttendance;