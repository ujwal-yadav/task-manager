import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { TrashIcon } from 'lucide-react';

export default function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <div className="p-6 sm:p-10">
      <div className="max-w-6xl mx-auto grid gap-6">
        <h1 className="text-3xl font-bold">Tasks List</h1>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Card key={task.id} className="p-4 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      task.priority === 'high'
                        ? 'bg-red-500 text-red-50'
                        : task.priority === 'medium'
                        ? 'bg-yellow-500 text-yellow-50'
                        : 'bg-green-500 text-green-50'
                    }`}
                  >
                    {task.priority}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteTask(task.id)}
                    >
                      <TrashIcon className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <h3 className="text-lg font-medium">{task.title}</h3>
                  <div className="flex justify-between mt-6">
                    <p className="text-sm text-muted-foreground">
                      {task.dueDate}
                    </p>
                    <Checkbox
                      checked={task.completed}
                      onCheckedChange={() => toggleTaskCompletion(task.id)}
                    />
                  </div>
                </div>

                <Link href={task.id}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-full bg-gray-100 hover:bg-gray-200"
                  >
                    View More
                  </Button>
                </Link>
              </Card>
            ))
          ) : (
            <h3 className="text-lg font-medium">No tasks</h3>
          )}
        </div>
      </div>
    </div>
  );
}
