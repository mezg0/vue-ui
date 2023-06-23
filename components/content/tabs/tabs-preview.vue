<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";

const meetingsToday = [
  {
    title: "Planning meeting with the new client",
    time: "In 32 minutes",
    color: "bg-sky-500",
  },
  {
    title: "Call Sarah Graves",
    time: "In 3 hours",
    color: "bg-sky-200",
  },
  {
    title: "Lunch with the team",
    time: "In 4 hours",
    color: "bg-sky-200",
  },
];

const previousMeetings = [
  {
    title: "Sales pitch with the client",
    time: "Yesterday",
  },
  {
    title: "Release the new library",
    time: "Yesterday",
  },
  {
    title: "Get feedback from the team",
    time: "Last week",
  },
];
</script>

<template>
  <Tabs default-value="Upcoming" class="w-full max-w-[350px]">
    <TabsList class="w-full grid grid-cols-2">
      <TabsTrigger value="Upcoming">Upcoming</TabsTrigger>
      <TabsTrigger value="Completed">Completed</TabsTrigger>
    </TabsList>
    <TabsContent value="Upcoming">
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Upcoming</CardTitle>
          <CardDescription>You have 3 meetings today.</CardDescription>
        </CardHeader>
        <CardContent>
          <div
            v-for="meeting in meetingsToday"
            class="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
          >
            <span class="flex h-full w-1 rounded-full" :class="meeting.color" />
            <div class="space-y-1">
              <p class="text-sm font-medium leading-none">
                {{ meeting.title }}
              </p>
              <p class="text-sm text-muted-foreground">
                {{ meeting.time }}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button class="w-full" variant="outline">View all</Button>
        </CardFooter>
      </Card>
    </TabsContent>
    <TabsContent value="Completed" class="w-full">
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Completed</CardTitle>
          <CardDescription>Your past meetings.</CardDescription>
        </CardHeader>
        <CardContent>
          <div
            v-for="meeting in previousMeetings"
            class="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
          >
            <span class="flex h-full w-1 rounded-full bg-gray-400" />
            <div class="space-y-1">
              <p class="text-sm font-medium leading-none">
                {{ meeting.title }}
              </p>
              <p class="text-sm text-muted-foreground">
                {{ meeting.time }}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button class="w-full" variant="outline">View all</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  </Tabs>
</template>

