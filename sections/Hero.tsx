import type { ImageWidget } from "apps/admin/widgets.ts";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
   */
  description?: string;
  placement?: "left" | "right";
  cta?: CTA[];
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

const HeroFlats = ({
  title = "Click here to tweak this text however you want.",
  description =
    "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  placement = "left",
  cta = [
    { id: "change-me-1", href: "/", text: "Change me", outline: false },
    { id: "change-me-2", href: "/", text: "Change me", outline: true },
  ],
}: Props) => {
  const backgroundStyle = {
    backgroundImage: `url('https://i.pinimg.com/originals/79/a3/84/79a384c3c449ad01b0e57e790807b2c0.gif')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <nav className="lg:container lg:mx-auto mx-4">
      <div className="flex flex-col items-center gap-8">
        <div
          className={`flex w-full xl:container xl:mx-auto py-20 mx-5 md:mx-10 z-10 ${
            PLACEMENT[placement]
          } lg:py-36 gap-12 md:gap-20 items-center`}
          style={backgroundStyle} // Apply background style here
        >
          <div className={`mx-6 lg:mx-auto lg:w-full space-y-4 gap-4 ${
            PLACEMENT[placement]
              ? "lg:w-1/2 lg:max-w-xl"
              : "flex flex-col items-center justify-center lg:max-w-3xl"
          }`}>
            <div
              className="inline-block lg:text-[80px] text-4xl leading-none font-medium"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />
            <p className="text-lg md:text-md leading-[150%]">
              {description}
            </p>
            <div className="flex items-center gap-3">
              {cta?.map((item) => (
                <a
                  key={item?.id}
                  id={item?.id}
                  href={item?.href}
                  target={item?.href.includes("http") ? "_blank" : "_self"}
                  className={`font-normal btn btn-primary ${
                    item.outline && "btn-outline"
                  }`}
                >
                  {item?.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeroFlats;
