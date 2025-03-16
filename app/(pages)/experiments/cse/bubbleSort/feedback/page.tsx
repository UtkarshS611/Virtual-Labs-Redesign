"use client"

import React from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Feedback = () => {

  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    rating: "5",
    comments: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFeedback({ name: "", email: "", rating: "5", comments: "" });
  };

  return (
    <section className="h-full flex justify-center items-center">
      <Card className="max-w-lg w-full mx-auto p-6 shadow-lg">
        <CardHeader>
          <CardTitle>Virtual Labs Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={feedback.name}
                onChange={(e) =>
                  setFeedback({ ...feedback, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                value={feedback.email}
                onChange={(e) =>
                  setFeedback({ ...feedback, email: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label>Rating</Label>
              <RadioGroup
                value={feedback.rating}
                onValueChange={(value) =>
                  setFeedback({ ...feedback, rating: value })
                }
              >
                <div className="flex gap-2">
                  {["1", "2", "3", "4", "5"].map((val) => (
                    <div key={val} className="flex items-center space-x-2">
                      <RadioGroupItem value={val} id={`rating-${val}`} />
                      <Label htmlFor={`rating-${val}`}>{val}</Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="comments">Comments</Label>
              <Textarea
                id="comments"
                value={feedback.comments}
                onChange={(e) =>
                  setFeedback({ ...feedback, comments: e.target.value })
                }
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Submit Feedback
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default Feedback;
