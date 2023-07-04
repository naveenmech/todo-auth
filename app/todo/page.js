"use client";
import Dashboard from "@/components/dashBoardPage/Dashboard";
import Todo from "@/components/todoPage/Todo";
import withAuth from "@/components/withAuthPage/withAuth";
import React from "react";

const page = () => {
  return (
    <div>
      <Dashboard />
      <Todo />
    </div>
  );
};

export default withAuth(page);
