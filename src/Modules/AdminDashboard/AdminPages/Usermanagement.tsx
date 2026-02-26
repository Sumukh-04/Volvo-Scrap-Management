import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  Chip,
  IconButton,
  Paper
} from "@mui/material";

import Delete from "../../../assets/image-assets/bin_delete.png";
import AppButton from "../../../Common/Components/UI/ButtonUI";
import backArrow from "../../../assets/image-assets/Back_Arrow.png";
import { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  assembly: boolean;
  inbound: boolean;
  l1: boolean;
  l2: boolean;
  l3: boolean;
};

const roles = ["Super Admin", "Admin", "Engineer", "Sentry"];

const generateUsers = (count: number): User[] => {
  return Array.from({ length: count }, (_, i) => {
    const id = 3200 + i;
    const role = roles[Math.floor(Math.random() * roles.length)];

    return {
      id,
      name: `User ${i + 1}`,
      email: `user${i + 1}@volvo.com`,
      role,
      assembly: Math.random() > 0.5,
      inbound: Math.random() > 0.5,
      l1: Math.random() > 0.5,
      l2: Math.random() > 0.5,
      l3: Math.random() > 0.5
    };
  });
};

const getRoleColors = (role: string) => {
  switch (role) {
    case "Super Admin":
      return { bg: "#E1F8E0", text: "#258C20" };
    case "Admin":
      return { bg: "#E1F8E0", text: "#258C20" };
    case "Engineer":
      return { bg: "#DBE5FF", text: "#274799" };
    case "Sentry":
      return { bg: "#EDEDED", text: "#000000" };
    default:
      return { bg: "#e0e0e0", text: "#000" };
  }
};
const stickyTopRow = {
  position: "sticky",
  top: 0,
  backgroundColor: "#fff",
  zIndex: 3,
  fontWeight: 500
};

const stickySecondRow = {
  position: "sticky",
  top: 45, 
  backgroundColor: "#fff",
  zIndex: 2
};

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>(generateUsers(40));

  const handleCheckboxChange = (id: number, field: keyof User) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, [field]: !user[field] } : user
      )
    );
  };

  const handleDelete = (id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <Box>
      {/* Header */}
      <div className="User-task">
        <div className="left-user-main">
          <img src={backArrow} alt="back" className="back-main" />
          <div className="filter-title">
            <p>User Management</p>
          </div>
        </div>

        <div className="right-user-main">
          <input
            type="search"
            placeholder="Search user...."
            className="user-search"
          />
          <AppButton variant="filled" style={{ height: "28px" }}>
            Add user
          </AppButton>
        </div>
      </div>

      {/* Table */}
      <Paper
        sx={{
          mt: 1,
          height: {
            xs: "60vh",
            sm: "65vh",
            md: "70vh",
            lg: "74vh",
            xl: "82vh"
          },
          overflow: "auto"
        }}
      >
        <Table stickyHeader>
    <TableHead>

  <TableRow>
    <TableCell sx={stickyTopRow}>Employee ID</TableCell>
    <TableCell sx={stickyTopRow}>User Name</TableCell>
    <TableCell sx={stickyTopRow}>Email ID</TableCell>
    <TableCell sx={stickyTopRow} align="center">Role</TableCell>
    <TableCell sx={stickyTopRow} align="center">Assembly</TableCell>
    <TableCell sx={stickyTopRow} align="center">Inbound</TableCell>
    <TableCell sx={stickyTopRow} align="center" colSpan={3}>
      Outbound
    </TableCell>
    <TableCell sx={stickyTopRow} align="center">Action</TableCell>
  </TableRow>

  
  <TableRow>
    <TableCell sx={stickySecondRow} />
    <TableCell sx={stickySecondRow} />
    <TableCell sx={stickySecondRow} />
    <TableCell sx={stickySecondRow} />
    <TableCell sx={stickySecondRow} />
    <TableCell sx={stickySecondRow} />
    <TableCell sx={stickySecondRow} align="center">L1</TableCell>
    <TableCell sx={stickySecondRow} align="center">L2</TableCell>
    <TableCell sx={stickySecondRow} align="center">L3</TableCell>
    <TableCell sx={stickySecondRow} />
  </TableRow>
</TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} hover>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>

                <TableCell align="center">
                  <Chip
                    label={user.role}
                    size="small"
                    sx={{
                      backgroundColor: getRoleColors(user.role).bg,
                      color: getRoleColors(user.role).text,
                      fontWeight: 400,
                      borderRadius: "4px"
                    }}
                  />
                </TableCell>

                <TableCell align="center">
                  <Checkbox
                    checked={user.assembly}
                    onChange={() =>
                      handleCheckboxChange(user.id, "assembly")
                    }
                    size="small"
                    sx={{
                      color: "#202A44",
                      "&.Mui-checked": { color: "#202A44" }
                    }}
                  />
                </TableCell>

                <TableCell align="center">
                  <Checkbox
                    checked={user.inbound}
                    onChange={() =>
                      handleCheckboxChange(user.id, "inbound")
                    }
                    size="small"
                    sx={{
                      color: "#202A44",
                      "&.Mui-checked": { color: "#202A44" }
                    }}
                  />
                </TableCell>

                {/* Outbound L1 */}
                <TableCell align="center">
                  <Checkbox
                    checked={user.l1}
                    onChange={() => handleCheckboxChange(user.id, "l1")}
                    size="small"
                    sx={{
                      color: "#202A44",
                      "&.Mui-checked": { color: "#202A44" }
                    }}
                  />
                </TableCell>

                {/* Outbound L2 */}
                <TableCell align="center">
                  <Checkbox
                    checked={user.l2}
                    onChange={() => handleCheckboxChange(user.id, "l2")}
                    size="small"
                    sx={{
                      color: "#202A44",
                      "&.Mui-checked": { color: "#202A44" }
                    }}
                  />
                </TableCell>

                {/* Outbound L3 */}
                <TableCell align="center">
                  <Checkbox
                    checked={user.l3}
                    onChange={() => handleCheckboxChange(user.id, "l3")}
                    size="small"
                    sx={{
                      color: "#202A44",
                      "&.Mui-checked": { color: "#202A44" }
                    }}
                  />
                </TableCell>

                {/* Delete */}
                <TableCell align="center">
                  <IconButton onClick={() => handleDelete(user.id)}>
                    <img
                      src={Delete}
                      alt="delete"
                      style={{
                        width: "14px",
                        height: "18px",
                        cursor: "pointer"
                      }}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}