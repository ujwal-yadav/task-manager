'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarIcon } from 'lucide-react';
import React from 'react';
import { useTodoDetails } from './TodoDetails.hooks';

const TodoDetails = () => {
  const { tasksDetails } = useTodoDetails();

  return (
    <div className="p-6 sm:p-10">
      <div className="max-w-4xl mx-auto grid gap-6">
        <h1 className="text-3xl font-bold">Task Details</h1>
        <div className="grid gap-4">
          {tasksDetails && (
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {tasksDetails.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="text-muted-foreground">
                  {tasksDetails.description}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      Due: {tasksDetails.dueDate}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">
                      Status: {tasksDetails.completed ? 'Done' : 'Not Done'}
                    </span>
                  </div>
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      tasksDetails.priority === 'high'
                        ? 'bg-red-500 text-red-50'
                        : tasksDetails.priority === 'medium'
                        ? 'bg-yellow-500 text-yellow-50'
                        : 'bg-green-500 text-green-50'
                    }`}
                  >
                    {tasksDetails.priority}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoDetails;
