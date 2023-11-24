import ServicePlaceholderIcon from "./assets/service-placeholder-icon.svg";
import CheckmarkIcon from "./assets/checkmark-icon.svg";
import ThumbnailPlaceholderImg from "./assets/thumbnail-placeholder.jpg";

import Typography from "../Typography";
import Button from "../Button";
import Pill from "../Pill";

const cardStyle = {
  cardBase:
    "flex flex-col w-full lg:w-[382px] shadow-md hover:shadow-xl rounded-lg transition linear duration-300",
  cardThumbnail: "h-56 w-full rounded-t-lg",
  cardIcon: "h-8 w-8",
};

export default function Index(props) {
  const {
    thumbnail,
    category = [],
    iconTitle,
    title = "Untitled",
    feature = [],
    description = "No Description Provided",
    article,
  } = props;

  const thumbnailImg =
    thumbnail == "default" ? ThumbnailPlaceholderImg : thumbnail;
  const iconTitleImg =
    iconTitle == "default" ? ServicePlaceholderIcon : iconTitle;
  const cardType = `${cardStyle["cardBase"]}`;

  return (
    <>
      <div className={cardType}>
        {thumbnail && (
          <img className={cardStyle["cardThumbnail"]} src={thumbnailImg} />
        )}
        <div className="flex flex-col gap-8 p-8">
          <div className="flex flex-col gap-4">
            {category.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {category.map((value, index) => (
                  <Pill key={index}>{value}</Pill>
                ))}
              </div>
            )}

            <div className="flex flex-row gap-5 items-center ">
              {iconTitle && (
                <img className={cardStyle["cardIcon"]} src={iconTitleImg} />
              )}
              <Typography
                size={title.length > 25 ? "lg" : "res-xl"}
                weight="semibold"
              >
                {title}
              </Typography>
            </div>
            <Typography type="serif" size="base">
              {description}
            </Typography>
          </div>

          {feature.length > 0 && (
            <>
              <div className="w-full h-[1px] bg-gray-200" />
              <div className="flex flex-col gap-5">
                <Typography size="res-lg" weight="medium">
                  Included Features
                </Typography>
                <div className="flex flex-col gap-4">
                  {feature.map((value, index) => (
                    <>
                      <div className="flex flex-row gap-4">
                        <img src={CheckmarkIcon} alt="" />
                        <Typography
                          key={index}
                          size="sm"
                          weight="medium"
                          color="liteBlack"
                        >
                          {value}
                        </Typography>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </>
          )}
          <Button type="primary" size="res-medium">
            {article ? "Continue Reading" : "Learn More"}
          </Button>
        </div>
      </div>
    </>
  );
}
