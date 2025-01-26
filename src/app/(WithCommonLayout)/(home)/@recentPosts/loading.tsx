import { Button } from "@heroui/button";
import Link from "next/link";
import Card from "@/components/UI/Card";
import { IPost } from "@/types";
import Container from "@/components/UI/Container";
import CardSkeleton from "@/components/UI/CardSkeleton";

export default async function RecentPostsLoading() {
  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Recently Found Items</h2>
        <p className="text-center">
          A list of items that have been recently found and reported.
        </p>
      </div>
      <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-3">
        {[...Array(9)].map((post, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default" size="md">
          <Link href="/found-items">See All</Link>
        </Button>
      </div>
    </Container>
  );
}
