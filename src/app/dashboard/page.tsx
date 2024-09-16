"use client";
import React, { useState } from "react";
import { Card, CardContent } from "~/components/ui/card";
import { CheckCircle, List } from "lucide-react";

const TaskMasterPage = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const works = [
    { id: 1, title: "Complete project proposal", status: "In Progress" },
    { id: 2, title: "Review client feedback", status: "Pending" },
    { id: 3, title: "Update website content", status: "Completed" },
    { id: 4, title: "Prepare monthly report", status: "Not Started" },
    { id: 5, title: "Team meeting", status: "Scheduled" },
  ];

  return (
    <div className="flex flex-grow">
      <div className="flex-grow bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-8">
        <div className="mb-6 flex items-center">
          <CheckCircle className="mr-3 h-8 w-8 text-blue-400" />
          <h1 className="text-3xl font-bold text-blue-300">Task Master</h1>
        </div>
        {selectedTeam ? (
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-blue-200">Team</h2>
            <div className="grid grid-cols-2 gap-4">
              <Card key={1} className="border-gray-700 bg-gray-800">
                <CardContent className="p-4">
                  <p className="text-blue-300">dheeraj</p>
                </CardContent>
              </Card>
              <Card key={2} className="border-gray-700 bg-gray-800">
                <CardContent className="p-4">
                  <p className="text-blue-300">thee</p>
                </CardContent>
              </Card>
              <Card key={3} className="border-gray-700 bg-gray-800">
                <CardContent className="p-4">
                  <p className="text-blue-300">pulu</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <p className="text-blue-200">
            Select a team from the sidebar to view its members.
          </p>
        )}
      </div>
      <div className="flex w-64 flex-col border-l border-gray-700 bg-gray-800 shadow-lg">
        <div className="bg-gradient-to-b from-blue-900 to-gray-800 p-4">
          <h3 className="flex items-center text-xl font-semibold text-blue-300">
            <List className="mr-2 h-5 w-5" />
            Work to be Done
          </h3>
        </div>
        <div className="flex-grow overflow-y-auto">
          {works.map((work) => (
            <Card key={work.id} className="m-2 border-gray-600 bg-gray-700">
              <CardContent className="p-4">
                <h4 className="font-semibold text-blue-200">{work.title}</h4>
                <p className="text-sm text-blue-400">{work.status}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskMasterPage;
