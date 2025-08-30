import { IUrlCard } from "@/interface/novel.interface";
import { getAllUrl } from "@/services/url.service";
import { useEffect } from "react";

interface IProps {
  urlData: IUrlCard[];
}

export default function Home(props: IProps) {

  const {
    urlData: urlData,
  } = props;

  useEffect(() => {
    console.log(urlData);
  }, [])

  // const fetchData = async () => {
  //   const all = await getAllNovels();
  //   console.log(all);
  // }

  return (
    <>
      <div className="layout-body container">
        <div className="row">
          <div className="col-lg-8 col-md-12">

          </div>

          <div className="mt-2 mt-lg-0 col-lg-4 col-md-12">
          </div>

          <div className="col-lg-8 col-md-12">
            <div className="mt-2">
            </div>
            
          </div>

          <div className="mt-2 col-lg-4 col-md-12">

          </div>
        </div>
      </div>

    </>
  );
}


export async function getServerSideProps() {
  const urls = await getAllUrl();

  return {
    props: {
      urls
    },
  };
}