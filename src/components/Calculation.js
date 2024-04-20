import React from "react";
import { Table } from "@mantine/core";
import CalculationGama from "./CalculationGama";
const data = require("./Wine-Data.json");

function Calculation() {
  const {
    extractAlcoholClasses,
    calculateFlavanoidsMean,
    calculateFlavanoidsMedian,
    calculateFlavanoidsMode,
    calculateGammaMean,
    calculateGammaMedian,
    calculateGammaMode,
    addGammaProperty,
  } = CalculationGama({ data });
  const uniqueAlcoholClasses = extractAlcoholClasses(data);

  return (
    <div>
      <div style={{ margin: "20px", overflowX: "auto" }}>
        <Table style={{ borderCollapse: "collapse" }}>
          <thead>
            <Table.Tr style={{ border: "2px solid black" }}>
              <Table.Th style={{ border: "2px solid black", padding: "8px" }}>
                Measures
              </Table.Th>
              {uniqueAlcoholClasses.map((item, index) => (
                <Table.Th
                  key={index}
                  style={{ border: "2px solid black", padding: "8px" }}
                >
                  {`Class ${item}`}
                </Table.Th>
              ))}
            </Table.Tr>
          </thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td
                key="mean-label"
                style={{ border: "2px solid black", padding: "8px" }}
              >
                Flavonoids Mean
              </Table.Td>
              {uniqueAlcoholClasses.map((row, index) => (
                <Table.Td
                  key={index}
                  style={{ border: "2px solid black", padding: "8px" }}
                >
                  {calculateFlavanoidsMean(data, row)}
                </Table.Td>
              ))}
            </Table.Tr>
            <Table.Tr>
              <Table.Td
                key="median-label"
                style={{ border: "2px solid black", padding: "8px" }}
              >
                Flavonoids Median
              </Table.Td>
              {uniqueAlcoholClasses.map((row, index) => (
                <Table.Td
                  key={index}
                  style={{ border: "2px solid black", padding: "8px" }}
                >
                  {calculateFlavanoidsMedian(data, row)}
                </Table.Td>
              ))}
            </Table.Tr>
            <Table.Tr>
              <Table.Td
                key="mode-label"
                style={{ border: "2px solid black", padding: "8px" }}
              >
                Flavonoids Mode
              </Table.Td>
              {uniqueAlcoholClasses.map((row, index) => (
                <Table.Td
                  key={index}
                  style={{ border: "2px solid black", padding: "8px" }}
                >
                  {calculateFlavanoidsMode(data, row)}
                </Table.Td>
              ))}
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </div>
      <div style={{ margin: "20px", overflowX: "auto" }}>
        <Table style={{ borderCollapse: "collapse" }}>
          <thead>
            <Table.Tr style={{ border: "2px solid black" }}>
              <Table.Th style={{ border: "2px solid black", padding: "8px" }}>
                Measures
              </Table.Th>
              {uniqueAlcoholClasses.map((item, index) => (
                <Table.Th
                  key={index}
                  style={{ border: "2px solid black", padding: "8px" }}
                >
                  {`Class ${item}`}
                </Table.Th>
              ))}
            </Table.Tr>
          </thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td
                key="mean-label"
                style={{ border: "2px solid black", padding: "8px" }}
              >
                Gamma Mean
              </Table.Td>
              {uniqueAlcoholClasses.map((row, index) => (
                <Table.Td
                  key={index}
                  style={{ border: "2px solid black", padding: "8px" }}
                >
                  {calculateGammaMean(data, row)}
                </Table.Td>
              ))}
            </Table.Tr>
            <Table.Tr>
              <Table.Td
                key="median-label"
                style={{ border: "2px solid black", padding: "8px" }}
              >
                Gamma Median
              </Table.Td>
              {uniqueAlcoholClasses.map((row, index) => (
                <Table.Td
                  key={index}
                  style={{ border: "2px solid black", padding: "8px" }}
                >
                  {calculateGammaMedian(data, row)}
                </Table.Td>
              ))}
            </Table.Tr>
            <Table.Tr>
              <Table.Td
                key="mode-label"
                style={{ border: "2px solid black", padding: "8px" }}
              >
                Gamma Mode
              </Table.Td>
              {uniqueAlcoholClasses.map((row, index) => (
                <Table.Td
                  key={index}
                  style={{ border: "2px solid black", padding: "8px" }}
                >
                  {calculateGammaMode(data, row)}
                </Table.Td>
              ))}
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </div>
    </div>
  );
}

export default Calculation;
