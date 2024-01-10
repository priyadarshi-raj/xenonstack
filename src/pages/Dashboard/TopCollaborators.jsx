import { Card, CardFooter, Image, Button } from "@nextui-org/react";

const TopCollaborators = () => {
  return (
    <div className="p-10">
      <h2 className="text-2xl mt-2">Collaborators</h2>

      <div className="flex flex-wrap justify-between gap-8 p-10">
        {[1, 2, 3, 4, 5].map((val, index) => {
          return (
            <div key={index} className="border p-1 rounded-2xl">
              <Card
                isFooterBlurred
                radius="lg"
                className="border-none"
                key={index}
              >
                <Image
                  alt="Woman listing to music"
                  className="object-cover"
                  height={200}
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2864&q=80"
                  width={200}
                />
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <p className="text-tiny text-white/80">Hrishabh Singh</p>
                  <Button
                    className="text-tiny text-white bg-black/20"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="18"
                      viewBox="0 0 23 18"
                      fill="#fff"
                    >
                      <path d="M22.1685 14.9386L20.2707 15.2923C19.8451 15.3739 19.5115 15.6279 19.4195 15.9635L19.0169 17.2968C18.7984 18.0224 17.6252 18.2492 17.0155 17.6778L13.5764 14.5576C13.3004 14.3037 13.4499 13.9046 13.864 13.8229C15.8998 13.4329 17.7287 12.535 19.0744 11.2561C19.293 11.0475 19.684 11.0203 19.9256 11.2107L22.4791 13.2243C23.3532 13.9136 23.0427 14.7753 22.1685 14.9386Z" />
                      <path d="M0.831173 14.9386L2.72903 15.2923C3.15461 15.3739 3.48817 15.6279 3.58019 15.9635L3.98276 17.2968C4.2013 18.0224 5.37452 18.2492 5.98414 17.6778L9.42329 14.5576C9.69934 14.3037 9.54981 13.9046 9.13573 13.8229C7.09984 13.4329 5.271 12.535 3.92525 11.2561C3.70671 11.0475 3.31564 11.0203 3.07409 11.2107L0.520615 13.2243C-0.353549 13.9136 -0.0429908 14.7753 0.831173 14.9386Z" />
                      <path d="M11.5286 0C7.07722 0 3.47705 2.83896 3.47705 6.34912C3.47705 7.6643 3.97164 8.87063 4.8228 9.87742C6.06503 11.3286 8.0319 12.3536 10.3208 12.6166C10.7119 12.671 11.1145 12.6982 11.5286 12.6982C11.9426 12.6982 12.3452 12.671 12.7363 12.6166C15.0252 12.3536 16.9921 11.3286 18.2343 9.87742C19.0855 8.87063 19.5801 7.6643 19.5801 6.34912C19.5801 2.83896 15.9799 0 11.5286 0ZM15.0482 6.14958L14.0935 6.9024C13.9325 7.02938 13.8405 7.27428 13.898 7.45568L14.1741 8.38991C14.3926 9.12459 13.898 9.41484 13.0698 9.02482L11.9196 8.48968C11.7126 8.38991 11.3675 8.38991 11.1605 8.48968L10.0103 9.02482C9.18212 9.40577 8.68753 9.12459 8.90607 8.38991L9.18212 7.45568C9.22813 7.28335 9.14761 7.02938 8.98658 6.9024L8.0089 6.14958C7.44529 5.70514 7.62933 5.2607 8.41147 5.16093L9.6422 4.99766C9.84924 4.97045 10.0908 4.82533 10.1828 4.68021L10.8614 3.60993C11.2295 3.02944 11.8276 3.02944 12.1957 3.60993L12.8743 4.68021C12.9663 4.82533 13.2079 4.97045 13.4264 4.99766L14.6571 5.16093C15.4278 5.2607 15.6118 5.70514 15.0482 6.14958Z" />
                    </svg>
                    160
                  </Button>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopCollaborators;
