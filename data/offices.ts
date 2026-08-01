import { Office } from "@/types";

export const offices: Office[] = [
  {
    id: "aba",
    city: "Aba (Head Office)",
    isHeadOffice: true,
    addressLines: [
      "49 Nwachukwu Street",
      "Off 219 Port Harcourt Road",
      "Aba, Abia State",
      "Nigeria",
    ],
  },
  {
    id: "port-harcourt",
    city: "Port Harcourt",
    isHeadOffice: false,
  },
  {
    id: "bayelsa",
    city: "Bayelsa",
    isHeadOffice: false,
  },
  {
    id: "owerri",
    city: "Owerri",
    isHeadOffice: false,
  },
  {
    id: "anambra",
    city: "Anambra",
    isHeadOffice: false,
  },
  {
    id: "enugu",
    city: "Enugu",
    isHeadOffice: false,
  },
];

export const headOffice = offices[0];
export const regionalOffices = offices.filter((office) => !office.isHeadOffice);
