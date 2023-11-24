import Header from "../../global/Header";

import Button from "../../components/Button";
import Typography from "../../components/Typography";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Card from "../../components/Card";

import CreativityImg from "./assets/creativity.png";
import GroupworkImg from "./assets/groupwork.png";
import ProcessImg from "./assets/process.png";

import AppleLogo from "./assets/apple.svg";
import DolbyLogo from "./assets/dolby.svg";
import LeedsLogo from "./assets/leeds.svg";
import OliverWhiteLogo from "./assets/oliver-white.svg";
import UTSLogo from "./assets/uts.svg";

export default function () {
  return (
    <>
      <Header />
      <div className="h-20"></div>
      <Container>
        <Row>
          <Col span="6">
            <div className="flex flex-col gap-2">
              <Typography size="res-lg" weight="medium">
                NEW UX BUNDLE ADDED
              </Typography>

              <Typography size="res-5xl" weight="semibold">
                Crafting Creativity <br /> to Captivate.
                <span className="text-red-900 font-bold italic"> No Cap.</span>
              </Typography>
            </div>
            <Typography type="serif" size="res-xl">
              Embark on a digital journey where captivation knows no bounds. At
              Oliver Sinclair, we're devoted to crafting experiences that
              transcend expectations.
            </Typography>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col lg:flex-row lg:gap-6 gap-4">
                <Button type="primary" size="res-large">
                  Who's My Oliver?
                </Button>
                <Button type="secondary" size="res-large">
                  View Service Bundles
                </Button>
              </div>
              <Typography type="serif" size="sm">
                learn more about our services, or figure out who oliver is
              </Typography>
            </div>
          </Col>
          <Col span="5" pos="s8">
            <img src={CreativityImg} alt="" />
          </Col>
        </Row>
      </Container>
      <Container color="offBlack">
        <Row>
          <Col span="10" pos="s2" justify="res-center">
            <div className="flex flex-col gap-6">
              <Typography
                size="res-4xl"
                weight="semibold"
                color="deepWhite"
                align="res-center"
              >
                Certified expertise from over{" "}
                <span className="text-red-900 font-bold italic">10+</span>{" "}
                industries,
                <br className="lg:block hidden" /> universities and events
              </Typography>
              <Typography
                type="serif"
                size="res-lg"
                color="liteWhite"
                align="res-center"
              >
                our team of dedicated professionals comprises individuals with a
                diverse array of skills and knowledge acquired through certified
                expertise from various industries, renowned universities, and
                impactful events
              </Typography>
            </div>
          </Col>
          <Col span="10" pos="s2" justify="res-center">
            <div className="flex lg:flex-wrap justify-between gap-14 items-center overflow-x-auto snap-x">
              <img src={UTSLogo} alt="" className="snap-center" />
              <img src={AppleLogo} alt="" className="snap-center" />
              <img src={DolbyLogo} alt="" className="snap-center" />
              <img src={LeedsLogo} alt="" className="snap-center" />
              <img src={OliverWhiteLogo} alt="" className="snap-center" />
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col span="5">
            <img src={GroupworkImg} alt="" />
          </Col>
          <Col span="6" pos="s7">
            <Typography size="res-4xl" weight="semibold">
              Whom exactly is..{" "}
              <span className="text-red-900 font-bold italic">Oliver?</span>
            </Typography>
            <Typography type="serif" size="res-lg">
              we inspire businesses to conceive and craft the digital realms of
              the future. Success is a collective voyage with oliver, and you’re
              just one click away from getting your way. our team of dedicated
              professionals comprises individuals with a diverse array of
              skills. <br />
              <br />
              knowledge acquired through certified expertise from various
              industries, renowned universities, and impactful events
            </Typography>
            <div className="flex flex-col lg:flex-row lg:gap-6 gap-4">
              <Button type="primary" size="res-large">
                Who's My Oliver?
              </Button>
              <Button type="secondary" size="res-large">
                View Service Bundles
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container color="white">
        <Row>
          <Col span="8" pos="s3" justify="res-center">
            <img src={ProcessImg} alt="" />
          </Col>
          <Col span="10" pos="s2" justify="res-center">
            <div className="flex flex-col gap-6">
              <Typography size="res-4xl" weight="semibold" align="res-center">
                All your design needs bundled.{" "}
                <span className="text-red-900 font-bold italic">
                  Take your pick.
                </span>
              </Typography>
              <Typography type="serif" size="res-lg" align="res-center">
                our team of dedicated professionals comprises individuals with a
                diverse array of skills and knowledge acquired through certified
                expertise from various industries, renowned universities, and
                impactful events
              </Typography>
            </div>
          </Col>
          <Col span="8" pos="s3" justify="res-center">
            <div className="flex flex-col lg:flex-row lg:gap-6 gap-4">
              <Button type="primary" size="res-large">
                Who's My Oliver?
              </Button>
              <Button type="secondary" size="res-large">
                View Service Bundles
              </Button>
            </div>
          </Col>
          <Col span="12" justify="res-center">
            <div className="flex flex-wrap justify-center gap-10">
              <Card
                iconTitle="default"
                title="UX Research Bundle"
                description="our team of dedicated professionals comprises individuals with a diverse array of skills and knowledge."
                feature={[
                  "Define Target Demographic",
                  "User Interviews & Research",
                  "Field Usability Study",
                ]}
              ></Card>
              <Card
                iconTitle="default"
                title="UX Research Bundle"
                description="our team of dedicated professionals comprises individuals with a diverse array of skills and knowledge."
                feature={[
                  "Define Target Demographic",
                  "User Interviews & Research",
                  "Field Usability Study",
                ]}
              ></Card>
              <Card
                iconTitle="default"
                title="UX Research Bundle"
                description="our team of dedicated professionals comprises individuals with a diverse array of skills and knowledge."
                feature={[
                  "Define Target Demographic",
                  "User Interviews & Research",
                  "Field Usability Study",
                ]}
              ></Card>
              <Card
                iconTitle="default"
                title="UX Research Bundle"
                description="our team of dedicated professionals comprises individuals with a diverse array of skills and knowledge."
                feature={[
                  "Define Target Demographic",
                  "User Interviews & Research",
                  "Field Usability Study",
                ]}
              ></Card>
              <Card
                iconTitle="default"
                title="UX Research Bundle"
                description="our team of dedicated professionals comprises individuals with a diverse array of skills and knowledge."
                feature={[
                  "Define Target Demographic",
                  "User Interviews & Research",
                  "Field Usability Study",
                ]}
              ></Card>
              <Card
                iconTitle="default"
                title="UX Research Bundle"
                description="our team of dedicated professionals comprises individuals with a diverse array of skills and knowledge."
                feature={[
                  "Define Target Demographic",
                  "User Interviews & Research",
                  "Field Usability Study",
                ]}
              ></Card>
            </div>
          </Col>
        </Row>
      </Container>

      <Container color="offBlue" padding="compact">
        <Row>
          <Col span="9">
            <div className="flex flex-col gap-4">
              <Typography size="2xl" weight="semibold">
                Got something a bit more custom?
              </Typography>
              <Typography type="serif" size="res-lg">
                Our team of dedicated professionals comprises individuals with a
                diverse array of skills and knowledge acquired through certified
                expertise from various industries, renowned universities, and
                impactful events
              </Typography>
            </div>
          </Col>
          <Col span="2" start="s11">
            <Button type="secondary" size="res-large">
              Get in touch
            </Button>
          </Col>
        </Row>
      </Container>

      <Container color="white">
        <Row gap="large">
          <Col span="10" pos="s2" justify="res-center">
            <div className="flex flex-col gap-6">
              <Typography size="res-4xl" weight="semibold" align="res-center">
                Proven Track Record of{" "}
                <span className="text-red-900 font-bold italic">Ambitious</span>{" "}
                Projects
              </Typography>
              <Typography type="serif" size="res-lg" align="res-center">
                our team of dedicated professionals comprises individuals with a
                diverse array of skills and knowledge acquired through certified
                expertise from various industries, renowned universities, and
                impactful events
              </Typography>
            </div>
          </Col>
          <Col span="12" justify="res-center">
            <div className="flex flex-wrap justify-center gap-10">
              <Card
                thumbnail="default"
                category={["Case Study", "eCommerce"]}
                title="Improving B2B Customer Experience For Assistive Technology Dealers"
                description="our team of dedicated professionals comprises individuals with a diverse array of skills and knowledge."
              ></Card>
              <Card
                thumbnail="default"
                category={["Case Study", "eCommerce"]}
                title="Improving B2B Customer Experience For Assistive Technology Dealers"
                description="our team of dedicated professionals comprises individuals with a diverse array of skills and knowledge."
              ></Card>
              <Card
                thumbnail="default"
                category={["Case Study", "eCommerce"]}
                title="Improving B2B Customer Experience For Assistive Technology Dealers"
                description="our team of dedicated professionals comprises individuals with a diverse array of skills and knowledge."
              ></Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
