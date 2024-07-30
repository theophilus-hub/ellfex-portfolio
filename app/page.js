"use client"

import Image from "next/image";
import ProfileCard from "@/components/profileCard";
import Content from "@/components/content";
import Body from "@/components/body";
import Link from "next/link"
import { useState, useEffect } from "react";
import Modal from "@/components/modal";


export default function Home() {


  
 

  return (
    <main className="flex min-h-screen flex-col bg-black px-2 py-4 ">
      <Content>
        <ProfileCard />
        <Body />
      </Content>
    </main>
  );
}
