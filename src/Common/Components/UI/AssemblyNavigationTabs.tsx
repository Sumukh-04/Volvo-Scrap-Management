import { Box, Button } from "@mui/material"
import { useState } from "react"

type Tab = "Assembly" | "Inbound" | "Outbound"

type Props = {
  value?: Tab
  onChange?: (tab: Tab) => void
}

const tabs: Tab[] = ["Assembly", "Inbound", "Outbound"]

export default function AssemblyNavigationTabs({
  value = "Assembly",
  onChange
}: Props) {

  const [active, setActive] = useState<Tab>(value)

  const handleClick = (tab: Tab) => {
    setActive(tab)
    onChange?.(tab)
  }

  return (

    <Box
      sx={{
        display: "flex",
        gap: "16px"
      }}
    >

      {tabs.map(tab => {

        const isActive = active === tab

        return (

          <Button
            key={tab}
            disableElevation
            onClick={() => handleClick(tab)}
            sx={{
              width: "84px",  
              height: "28px",
              px: "16px",
              fontFamily: "Volvo Novum",
              fontSize: "14px",
              fontWeight: 500,
              textTransform: "none",
              borderRadius: "2px",
              border: "1px solid #202A44",
              backgroundColor: isActive
                ? "#202A44"
                : "#ffffff",

              color: isActive
                ? "#ffffff"
                : "#202A44",

              "&:hover": {
                backgroundColor: "#2E3A59",
                color: "#ffffff"
              }

            }}
          >

            {tab}

          </Button>

        )

      })}

    </Box>

  )
}