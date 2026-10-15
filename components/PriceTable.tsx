import type { ReactNode } from "react";

type PriceTableProps = {
  caption?: string;
  headers: string[];
  rows: ReactNode[][];
};

export function PriceTable({ caption, headers, rows }: PriceTableProps) {
  return (
    <div className="max-w-full overflow-x-auto rounded-lg border border-line">
      <table className="w-full table-fixed border-collapse text-left text-sm">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <thead className="bg-card">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className="border-b border-line px-2 py-2 font-semibold break-words text-foreground sm:px-3 sm:py-2.5"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="odd:bg-background even:bg-card/60">
              {row.map((cell, index) => (
                <td
                  key={`${rowIndex}-${index}`}
                  className="border-b border-line px-2 py-2 align-top break-words sm:px-3 sm:py-2.5"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
