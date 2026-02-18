import { ScrapItem } from "../../../../Common/DashboardComponents/ScrapCard";
import scrapIcon from "../../../../assets/image-assets/scrap_icon.png"; 
import statImage from "../../../../assets/image-assets/stat-image.png"

const materials = ["Plastic", "Copper", "Aluminium", "Steel"];
const statuses = ["Pending", "Draft", "Sent For Approval", "Resubmitted"];

const OutboundGridData: ScrapItem[] = Array.from(
  { length: 15 },
  (_, index) => ({
    id: `${140 + index}`,
    type: materials[index % materials.length],
    weight: `${80 + index}kg`,
    date: "12-01-2026 16:40:29",
    status: statuses[index % statuses.length],
    approval: "Sentry Approved",
    icon:
    index < 3
    ?scrapIcon
    :statImage,
    note:
      index < 3
        ? undefined
        : "Significant discrepancy in scrap condition; approval cannot be granted.",
  })
);

export default OutboundGridData;
