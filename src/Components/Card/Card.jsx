'use client';

import { Button, Card } from 'flowbite-react';

export default function CardWithActionButton() {
  return (
    <Card className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          Noteworthy technology acquisitions 2021
        </p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </p>
      <Button>
        <p>
          Read more
        </p>
      </Button>
    </Card>
  )
}


