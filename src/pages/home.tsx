import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export { default } from "@/components/home";

export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => {
  try {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["app", "homepage", "common"])),
      },
    };
  } catch {
    return { notFound: true };
  }
};
