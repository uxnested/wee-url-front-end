import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import * as Popover from "@radix-ui/react-popover";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Popover.Root>
        <Popover.Trigger className="bg-white rounded">
          Show info
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="rounded bg-black p-[20px] w-[260px]">
            Some content
            <Popover.Arrow className="PopoverArrow" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}
