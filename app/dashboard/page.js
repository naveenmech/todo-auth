"use client";
import Dashboard from "@/components/dashBoardPage/Dashboard";
import Hero from "@/components/heroPage/Hero";
import withAuth from "@/components/withAuthPage/withAuth";
import React from "react";

const page = () => {
  return (
    <div>
      <Dashboard />
      <Hero />
    </div>
  );
};

export default withAuth(page);
