import { useState, useEffect } from "react";
import { ScrapItem } from "../../../Common/DashboardComponents/ScrapCard";
import AdminOutboundCard from "../AdminComponents/AdminOutboundCard";
import ScrapCardSkeleton from "../../../Common/Components/Skeleton/skeleton";
import Pagination from "@mui/material/Pagination";

type AdminOutboundProps = {
  data: ScrapItem[];
  loading?: boolean;
};

export default function AdminOutbound({ data, loading }: AdminOutboundProps) {

  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    setPage(1);
  }, [data]);

  return (
    <>
      <div className="scrap-grid admin-outbound-grid">

        {loading
          ? Array.from({ length: 18 }).map((_, i) => (
              <div key={i}>
                <ScrapCardSkeleton />
              </div>
            ))
          : paginatedData.map((item) => (
              <AdminOutboundCard key={item.id} item={item} />
            ))}

      </div>

      {!loading && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <Pagination
            count={Math.ceil(data.length / itemsPerPage)}
            page={page}
            onChange={(e, value) => setPage(value)}
          />
        </div>
      )}
    </>
  );
}