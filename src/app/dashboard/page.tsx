"use client";
import React, { useState } from "react";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { PlusCircle, Users, CheckCircle, List } from "lucide-react";

const TaskMasterPage = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const teams = [
    { id: 1, name: "Marketing", members: ["Alice", "Bob", "Charlie"] },
    { id: 2, name: "Development", members: ["David", "Eve", "Frank"] },
    { id: 3, name: "Design", members: ["Grace", "Henry", "Ivy"] },
    { id: 4, name: "Sales", members: ["Jack", "Kate", "Liam"] },
  ];

  const works = [
    { id: 1, title: "Complete project proposal", status: "In Progress" },
    { id: 2, title: "Review client feedback", status: "Pending" },
    { id: 3, title: "Update website content", status: "Completed" },
    { id: 4, title: "Prepare monthly report", status: "Not Started" },
    { id: 5, title: "Team meeting", status: "Scheduled" },
  ];

  const handleScroll = (e: any) => {
    const container = e.target;
    const maxScroll = container.scrollHeight - container.clientHeight;
    const currentScroll = container.scrollTop;
    setScrollPosition((currentScroll / maxScroll) * 100);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className="relative flex w-64 flex-col border-r border-gray-700 bg-gray-800 shadow-lg">
        <div className="bg-gradient-to-b from-blue-900 to-gray-800 p-4">
          <img
            src="/api/placeholder/100/100"
            alt="Profile"
            className="mx-auto mb-4 h-20 w-20 rounded-full border-2 border-blue-400"
          />
          <h2 className="text-center text-xl font-semibold text-blue-300">
            John Doe
          </h2>
          <p className="text-center text-sm text-blue-400">Product Manager</p>
        </div>
        <div className="flex-grow overflow-y-auto" onScroll={handleScroll}>
          <h3 className="px-4 py-2 text-sm font-semibold uppercase text-blue-400">
            Your Teams
          </h3>
          {teams.map((team) => (
            <Card
              key={team.id}
              className={`m-2 cursor-pointer border-gray-600 bg-gray-700 transition-colors duration-200 hover:bg-gray-600`}
              onClick={() => {}}
            >
              <CardContent className="flex items-center p-4">
                <Users className="mr-2 h-5 w-5 text-blue-400" />
                <h3 className="font-semibold text-blue-200">{team.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="bg-gradient-to-t from-blue-900 to-gray-800 p-4">
          <Button className="flex w-full items-center justify-center border-none bg-blue-600 text-white hover:bg-blue-700">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Team
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 top-0 w-1 bg-gray-700">
          <div
            className="w-full bg-blue-500"
            style={{
              height: "20px",
              position: "absolute",
              top: `${scrollPosition}%`,
              transition: "top 0.1s ease-out",
            }}
          />
        </div>
      </div>
      <div className="flex flex-grow">
        <div className="flex-grow bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-8">
          <div className="mb-6 flex items-center">
            <CheckCircle className="mr-3 h-8 w-8 text-blue-400" />
            <h1 className="text-3xl font-bold text-blue-300">Task Master</h1>
          </div>
          {selectedTeam ? (
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-blue-200">
                Team
              </h2>
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
    </div>
  );
};

export default TaskMasterPage;
