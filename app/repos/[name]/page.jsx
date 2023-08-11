"use client";
import RepoDetailCard from "@/app/components/RepoDetailCard";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const RepoSinglePage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  //   let { name } = useParams();
  const params = useParams();
  console.log(params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(`https://api.github.com/repos/htetlinoo/${params.name}`)
          .then((response) => response.json())
          .then((data) => {
            setData(data);
            setLoading(!isLoading);
          });
      } catch (err) {
        setData(err);
      }
    };
    fetchData();
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>Error Fetching Occurred.</p>;
  console.log(data);

  return (
    <div>
      <Link href="/repos">
        <button>Back</button>
      </Link>
      <RepoDetailCard data={data} />
    </div>
  );
};

export default RepoSinglePage;
