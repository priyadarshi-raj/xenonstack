import React, { useEffect } from "react";
import { Tabs, Tab, Card, CardBody, Button } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
export default function Notifications() {
  // const fetchData=()>{

  // }
  // useEffect(()=>{

  // },[])

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className="flex w-full flex-col p-10 px-32">
      <h1 className="text-3xl tracking-widest font-lg py-5 border-b">
        Notifications
      </h1>
      <Tabs aria-label="Options" className="mt-8">
        <Tab key="photos" title="Not Spam">
          <Card>
            <CardBody>
              <Accordion variant="splitted">
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Accordion 1"
                >
                  <div className="flex flex-col gap-y-5">
                    <p>{defaultContent}</p>
                    <div className="flex gap-x-2 justify-end">
                      <Button color="danger" variant="light">
                        Reject
                      </Button>

                      <Button color="primary">Accept</Button>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  title="Accordion 2"
                >
                  <div className="flex flex-col gap-y-5">
                    <p>{defaultContent}</p>
                    <div className="flex gap-x-2 justify-end">
                      <Button color="danger" variant="light">
                        Reject
                      </Button>

                      <Button color="primary">Accept</Button>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Accordion 3"
                  title="Accordion 3"
                >
                  <div className="flex flex-col gap-y-5">
                    <p>{defaultContent}</p>
                    <div className="flex gap-x-2 justify-end">
                      <Button color="danger" variant="light">
                        Reject
                      </Button>

                      <Button color="primary">Accept</Button>
                    </div>
                  </div>
                </AccordionItem>
              </Accordion>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="music" title="Spam">
          <Card>
            <CardBody>
              
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
