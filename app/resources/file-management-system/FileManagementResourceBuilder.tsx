"use client";

import type { DragEvent, KeyboardEvent } from "react";
import { useMemo, useState } from "react";
import {
  Add,
  Document,
  Download,
  DragVertical,
  Folder,
  Image as ImageIcon,
  Reset,
  Rule,
  SearchAdvanced,
  TrashCan,
} from "@carbon/icons-react";

type AssetType = {
  id: string;
  name: string;
  abbreviation: string;
};

type NamingPart = {
  id: string;
  label: string;
  example: string;
};

type NamingSpacer = "underscore" | "hyphen" | "space";

type FolderSection = {
  id: string;
  title: string;
  description: string;
  items: string;
  includeLifecycles: boolean;
  isCustom?: boolean;
};

type BuilderState = {
  organization: string;
  team: string;
  systemName: string;
  owner: string;
  discoveryPainPoints: string;
  discoveryProductsServices: string;
  discoveryAccessLocations: string;
  discoveryFutureGroups: string;
  discoveryUsers: string;
  discoveryDepartments: string;
  discoveryDepartmentProcesses: string;
  discoveryDepartmentContent: string;
  discoveryRelationships: string;
  discoveryCurrentStructure: string;
  discoveryPriorityAreas: string;
  discoveryFindability: string;
  discoveryNamingIssues: string;
  discoveryCleanupScope: string;
  includeSortingNumbers: boolean;
  platforms: string;
  folderSections: FolderSection[];
  assetLibraryFolders: string[];
  assetTypes: AssetType[];
  namingSpacer: NamingSpacer;
  namingParts: NamingPart[];
  permissions: string;
  archiveCadence: string;
  reviewCadence: string;
  lifecycles: string[];
};

type DownloadResource = {
  filename: string;
  label: string;
  description: string;
  content: BlobPart;
  type: string;
};

type ZipEntry = {
  name: string;
  data: Uint8Array;
};

type DocxParagraphStyle = "title" | "heading1" | "heading2" | "normal" | "code";

type DragList = "folderSections" | "assetLibraryFolders" | "assetTypes" | "namingParts";

type DraggedItem = {
  list: DragList;
  index: number;
};

type DropTarget = DraggedItem;

type ToggleField =
  | "includeSortingNumbers";

type TextField =
  | "organization"
  | "team"
  | "systemName"
  | "owner"
  | "discoveryPainPoints"
  | "discoveryProductsServices"
  | "discoveryAccessLocations"
  | "discoveryFutureGroups"
  | "discoveryUsers"
  | "discoveryDepartments"
  | "discoveryDepartmentProcesses"
  | "discoveryDepartmentContent"
  | "discoveryRelationships"
  | "discoveryCurrentStructure"
  | "discoveryPriorityAreas"
  | "discoveryFindability"
  | "discoveryNamingIssues"
  | "discoveryCleanupScope"
  | "platforms"
  | "permissions"
  | "archiveCadence"
  | "reviewCadence";

const defaultLifecycleStages = [
  "Intake",
  "Working files",
  "Review",
  "Approved finals",
];

const archiveFolderName = "~Archive";

const defaultNamingParts: NamingPart[] = [
  { id: "workstream-product", label: "Workstream or Product", example: "Campaigns" },
  { id: "audience", label: "Audience", example: "Prospects" },
  { id: "channel", label: "Channel", example: "Instagram" },
  { id: "asset-type-abbreviation", label: "Asset Type Abbreviation", example: "SOC" },
  { id: "status", label: "Status", example: "Approved" },
];

const defaultFolderSections: FolderSection[] = [
  {
    id: "workstreams",
    title: "Workstreams",
    description: "Add recurring bodies of work such as campaigns, reporting, events, or content programs.",
    items: "Sprints\nCampaigns\nOther",
    includeLifecycles: true,
  },
  {
    id: "departments",
    title: "Departments",
    description: "List teams, business units, or internal groups that need clear folder ownership.",
    items: "Marketing\nSales\nOperations\nCustomer Experience",
    includeLifecycles: false,
  },
  {
    id: "products",
    title: "Products",
    description: "Name product lines, platforms, launches, or customer-facing categories people search by.",
    items: "Product 1\nProduct 2\nProduct 3",
    includeLifecycles: false,
  },
  {
    id: "services",
    title: "Services",
    description: "Name service lines, support offerings, or repeatable capabilities people request.",
    items: "Service 1\nService 2\nService 3",
    includeLifecycles: false,
  },
];

const defaultState: BuilderState = {
  organization: "Example Organization",
  team: "Marketing",
  systemName: "Shared File System",
  owner: "Team owner or admin",
  discoveryPainPoints: "Files are duplicated across platforms, final assets are hard to identify, and older work is mixed into active folders.",
  discoveryProductsServices: "Core products, service lines, programs, or offerings the file system needs to support.",
  discoveryAccessLocations: "Products, services, and related content are accessed through the website, shared drive, sales portal, and partner tools.",
  discoveryFutureGroups: "Upcoming launches, product groups, service categories, or industry-standard groupings that should be reflected.",
  discoveryUsers: "Marketing, creative, operations, leadership, and agency partners need different levels of access.",
  discoveryDepartments: "Marketing, sales, operations, customer experience, leadership, IT, and external partners.",
  discoveryDepartmentProcesses: "Campaign planning, creative production, reporting, approvals, sales enablement, and content publishing.",
  discoveryDepartmentContent: "Web content, reports, templates, presentations, dashboards, talking points, invoices, and working documents.",
  discoveryRelationships: "Products connect to campaigns, audiences, channels, departments, source files, published assets, and reporting.",
  discoveryCurrentStructure: "Files are currently spread across shared drives, cloud folders, personal workspaces, and tool-specific libraries.",
  discoveryPriorityAreas: "Reusable assets, active campaigns, approved finals, templates, and leadership-facing reports should stay easy to reach.",
  discoveryFindability: "People usually search by campaign, product, audience, channel, asset type, or approval status.",
  discoveryNamingIssues: "Some file names rely on vague final labels, dates, duplicate versions, or inconsistent abbreviations.",
  discoveryCleanupScope: "Move reusable assets into the asset library, keep active work in lifecycle folders, and archive inactive projects.",
  includeSortingNumbers: true,
  platforms: "SharePoint\nGoogle Drive\nAdobe Creative Cloud",
  folderSections: [],
  assetLibraryFolders: ["Logos", "Reports", "Templates", "Photos"],
  assetTypes: [
    { id: "presentations", name: "Presentations", abbreviation: "PRES" },
    { id: "social-posts", name: "Social posts", abbreviation: "SOC" },
    { id: "web-files", name: "Web files", abbreviation: "WEB" },
  ],
  namingSpacer: "space",
  namingParts: defaultNamingParts,
  permissions: "Keep final assets visible to the full team. Limit admin, contracts, and source files to owners and approved contributors.",
  archiveCadence: "Quarterly for active work, annually for evergreen libraries.",
  reviewCadence: "Review owners, folder usage, and archived content every 6 months.",
  lifecycles: defaultLifecycleStages,
};

function splitLines(value: string) {
  return value
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function encodeText(value: string) {
  return new TextEncoder().encode(value);
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function writeUint16(output: number[], value: number) {
  output.push(value & 0xff, (value >>> 8) & 0xff);
}

function writeUint32(output: number[], value: number) {
  output.push(value & 0xff, (value >>> 8) & 0xff, (value >>> 16) & 0xff, (value >>> 24) & 0xff);
}

function pushBytes(output: number[], bytes: Uint8Array) {
  bytes.forEach((byte) => output.push(byte));
}

let crcTable: number[] | null = null;

function getCrcTable() {
  if (crcTable) {
    return crcTable;
  }

  crcTable = Array.from({ length: 256 }, (_, index) => {
    let value = index;

    for (let bit = 0; bit < 8; bit += 1) {
      value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
    }

    return value >>> 0;
  });

  return crcTable;
}

function crc32(data: Uint8Array) {
  const table = getCrcTable();
  let crc = 0xffffffff;

  data.forEach((byte) => {
    crc = table[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  });

  return (crc ^ 0xffffffff) >>> 0;
}

function createZip(entries: ZipEntry[]) {
  const localParts: number[] = [];
  const centralParts: number[] = [];
  let offset = 0;

  entries.forEach((entry) => {
    const nameBytes = encodeText(entry.name);
    const entryCrc = crc32(entry.data);
    const localOffset = offset;
    const localHeader: number[] = [];

    writeUint32(localHeader, 0x04034b50);
    writeUint16(localHeader, 20);
    writeUint16(localHeader, 0x0800);
    writeUint16(localHeader, 0);
    writeUint16(localHeader, 0);
    writeUint16(localHeader, 0);
    writeUint32(localHeader, entryCrc);
    writeUint32(localHeader, entry.data.length);
    writeUint32(localHeader, entry.data.length);
    writeUint16(localHeader, nameBytes.length);
    writeUint16(localHeader, 0);
    pushBytes(localHeader, nameBytes);
    pushBytes(localHeader, entry.data);
    localParts.push(...localHeader);
    offset += localHeader.length;

    const centralHeader: number[] = [];
    writeUint32(centralHeader, 0x02014b50);
    writeUint16(centralHeader, 20);
    writeUint16(centralHeader, 20);
    writeUint16(centralHeader, 0x0800);
    writeUint16(centralHeader, 0);
    writeUint16(centralHeader, 0);
    writeUint16(centralHeader, 0);
    writeUint32(centralHeader, entryCrc);
    writeUint32(centralHeader, entry.data.length);
    writeUint32(centralHeader, entry.data.length);
    writeUint16(centralHeader, nameBytes.length);
    writeUint16(centralHeader, 0);
    writeUint16(centralHeader, 0);
    writeUint16(centralHeader, 0);
    writeUint16(centralHeader, 0);
    writeUint32(centralHeader, 0);
    writeUint32(centralHeader, localOffset);
    pushBytes(centralHeader, nameBytes);
    centralParts.push(...centralHeader);
  });

  const centralOffset = offset;
  const centralSize = centralParts.length;
  const endRecord: number[] = [];

  writeUint32(endRecord, 0x06054b50);
  writeUint16(endRecord, 0);
  writeUint16(endRecord, 0);
  writeUint16(endRecord, entries.length);
  writeUint16(endRecord, entries.length);
  writeUint32(endRecord, centralSize);
  writeUint32(endRecord, centralOffset);
  writeUint16(endRecord, 0);

  return new Uint8Array([...localParts, ...centralParts, ...endRecord]);
}

function cleanName(value: string) {
  return cleanOptionalName(value) || "File_System";
}

function displayValue(value: string, fallback = "Not provided") {
  return value.trim() || fallback;
}

function cleanOptionalName(value: string) {
  return value
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .replace(/_{2,}/g, "_");
}

function isArchiveLifecycle(value: string) {
  return cleanName(value).toLowerCase() === "archive";
}

function cleanAbbreviation(value: string) {
  return cleanOptionalName(value).toUpperCase();
}

function getAssetTypeLabel(assetType: AssetType) {
  return assetType.name.trim() || assetType.abbreviation.trim() || "Asset type";
}

function getActiveAssetTypes(state: BuilderState) {
  return state.assetTypes.filter((assetType) => assetType.name.trim() || assetType.abbreviation.trim());
}

function getActiveAssetLibraryFolders(state: BuilderState) {
  return state.assetLibraryFolders.map((folder) => folder.trim()).filter(Boolean);
}

function getNamingSeparator(spacer: NamingSpacer) {
  if (spacer === "hyphen") {
    return "-";
  }

  if (spacer === "space") {
    return " - ";
  }

  return "_";
}

function getActiveNamingParts(state: BuilderState) {
  return state.namingParts.filter((part) => part.label.trim() || part.example.trim());
}

function getActiveFolderSections(state: BuilderState) {
  return state.folderSections.filter((section) => getFolderSectionTitle(section) || splitLines(section.items).length);
}

function getFolderSectionTitle(section: FolderSection) {
  return section.title.trim() || "Custom Section";
}

function cloneFolderSection(section: FolderSection) {
  return { ...section };
}

function reorderList<T>(items: T[], fromIndex: number, toIndex: number) {
  if (fromIndex === toIndex || fromIndex < 0 || toIndex < 0 || fromIndex >= items.length || toIndex >= items.length) {
    return items;
  }

  const nextItems = [...items];
  const [movedItem] = nextItems.splice(fromIndex, 1);
  nextItems.splice(toIndex, 0, movedItem);

  return nextItems;
}

function formatNamingPart(value: string, separator: string) {
  const trimmedValue = value.trim();

  if (separator === " ") {
    return trimmedValue.replace(/\s+/g, " ");
  }

  return cleanName(trimmedValue);
}

function buildNamingPattern(state: BuilderState, field: "example" | "label") {
  const separator = getNamingSeparator(state.namingSpacer);
  const namingParts = getActiveNamingParts(state);

  return namingParts
    .map((part) => formatNamingPart(part[field], separator))
    .filter(Boolean)
    .join(separator);
}

function downloadResource(resource: DownloadResource) {
  const blob = new Blob([resource.content], { type: resource.type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = resource.filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function formatFolderName(label: string, sortingPrefix: string | null, includeSortingNumbers: boolean) {
  const name = cleanName(label);

  return includeSortingNumbers && sortingPrefix ? `${sortingPrefix}_${name}` : name;
}

function getAssetLibraryFolderName(includeSortingNumbers: boolean) {
  return formatFolderName("Asset Library", "01", includeSortingNumbers);
}

function addLifecycleFolders(lines: string[], indent: string, lifecycles: string[], includeSortingNumbers: boolean) {
  lifecycles.forEach((lifecycle, index) => {
    const prefix = String(index + 1).padStart(2, "0");
    lines.push(`${indent}${formatFolderName(lifecycle, prefix, includeSortingNumbers)}`);
  });
}

function addGroupedFolders(
  lines: string[],
  folderName: string,
  items: string[],
  includeLifecycles: boolean,
  lifecycles: string[],
  includeSortingNumbers: boolean,
) {
  if (!items.length) {
    return;
  }

  lines.push(`  ${folderName}`);
  items.forEach((item) => {
    lines.push(`    ${cleanName(item)}`);

    if (includeLifecycles) {
      addLifecycleFolders(lines, "      ", lifecycles, includeSortingNumbers);
    }
  });
}

function buildFolderTree(state: BuilderState) {
  const rootName = cleanName(state.systemName);
  const assetLibraryFolders = getActiveAssetLibraryFolders(state);
  const lifecycles = state.lifecycles.filter((lifecycle) => !isArchiveLifecycle(lifecycle));
  const lines = [rootName];

  lines.push(`  ${formatFolderName("Admin", "00", state.includeSortingNumbers)}`);
  lines.push("    Owners");
  lines.push("    Guidelines");

  lines.push(`  ${getAssetLibraryFolderName(state.includeSortingNumbers)}`);
  assetLibraryFolders.forEach((folder) => {
    lines.push(`    ${cleanName(folder)}`);
  });

  state.folderSections.forEach((section, index) => {
    addGroupedFolders(
      lines,
      formatFolderName(getFolderSectionTitle(section), String(90 + index), state.includeSortingNumbers),
      splitLines(section.items),
      section.includeLifecycles,
      lifecycles,
      state.includeSortingNumbers,
    );
  });

  lines.push(`  ${archiveFolderName}`);

  return lines;
}

function buildPowerShellScript(state: BuilderState) {
  const rootName = cleanName(state.systemName);
  const folderLines = buildFolderTree(state);
  const paths: string[] = [];
  const stack: Array<{ indent: number; path: string }> = [];

  folderLines.slice(1).forEach((line) => {
    const indent = line.search(/\S/);
    const folder = line.trim();

    while (stack.length && stack[stack.length - 1].indent >= indent) {
      stack.pop();
    }

    const parent = stack.length ? stack[stack.length - 1].path : rootName;
    const path = `${parent}/${folder}`;
    paths.push(path);
    stack.push({ indent, path });
  });

  return [
    "# File and folder system setup script",
    `# Generated for: ${displayValue(state.organization)}`,
    `# Team: ${displayValue(state.team)}`,
    "# Run this script from the location where the root folder should be created.",
    `# Review the generated guide before running this if you need to adjust naming, permissions, or ${archiveFolderName}.`,
    "",
    `$root = Join-Path -Path (Get-Location) -ChildPath "${rootName}"`,
    "New-Item -ItemType Directory -Force -Path $root | Out-Null",
    "",
    "$folders = @(",
    ...paths.map((path) => `  "${path.replace(`${rootName}/`, "")}"`),
    ")",
    "",
    "foreach ($folder in $folders) {",
    "  New-Item -ItemType Directory -Force -Path (Join-Path -Path $root -ChildPath $folder) | Out-Null",
    "}",
    "",
    "Write-Host \"Folder system created at $root\"",
    "",
  ].join("\n");
}

function docxParagraph(text: string, style: DocxParagraphStyle = "normal") {
  if (!text) {
    return "<w:p/>";
  }

  const styleMap: Record<DocxParagraphStyle, { size: number; bold?: boolean; font?: string }> = {
    title: { size: 36, bold: true },
    heading1: { size: 28, bold: true },
    heading2: { size: 24, bold: true },
    normal: { size: 22 },
    code: { size: 20, font: "Courier New" },
  };
  const styleConfig = styleMap[style];
  const spacing = style === "title" || style === "heading1" ? " w:before=\"240\" w:after=\"120\"" : " w:after=\"80\"";
  const font = styleConfig.font
    ? `<w:rFonts w:ascii="${styleConfig.font}" w:hAnsi="${styleConfig.font}"/>`
    : "";
  const bold = styleConfig.bold ? "<w:b/>" : "";

  return [
    "<w:p>",
    `<w:pPr><w:spacing${spacing}/></w:pPr>`,
    "<w:r>",
    `<w:rPr>${font}${bold}<w:sz w:val="${styleConfig.size}"/></w:rPr>`,
    `<w:t xml:space="preserve">${escapeXml(text)}</w:t>`,
    "</w:r>",
    "</w:p>",
  ].join("");
}

function buildGuideDocxXml(state: BuilderState) {
  const platforms = splitLines(state.platforms);
  const assetLibraryFolders = getActiveAssetLibraryFolders(state);
  const assetTypes = getActiveAssetTypes(state);
  const lifecycles = state.lifecycles.filter((lifecycle) => !isArchiveLifecycle(lifecycle));
  const folderSections = getActiveFolderSections(state);
  const namingPattern = buildNamingPattern(state, "example");
  const namingPatternStructure = buildNamingPattern(state, "label");
  const paragraphs = [
    docxParagraph(`${displayValue(state.systemName, cleanName(state.systemName))} Guide`, "title"),
    docxParagraph(`Created for ${displayValue(state.team)} at ${displayValue(state.organization)}.`),
    docxParagraph("System summary", "heading1"),
    docxParagraph(`Organization: ${displayValue(state.organization)}`),
    docxParagraph(`Team: ${displayValue(state.team)}`),
    docxParagraph(`Owner: ${displayValue(state.owner)}`),
    docxParagraph(`Root folder: ${cleanName(state.systemName)}`),
    docxParagraph("Download set", "heading1"),
    docxParagraph("- AI Refinement Prompt: Paste this into an AI assistant to pressure-test and improve the system."),
    docxParagraph("- Guide (Word): Use this editable document as the human-readable operating guide for the structure."),
    docxParagraph("- Guide (TXT): Use this plain text copy when you need a lightweight version to paste into another tool."),
    docxParagraph("- Asset Index: Use the CSV to track reusable assets, ownership, review dates, and archive timing."),
    docxParagraph("- Setup Script: Run the PowerShell script only after the folder map has been reviewed."),
    docxParagraph("Folder structure settings", "heading1"),
    docxParagraph(`Sorting numbers: ${state.includeSortingNumbers ? "On" : "Off"}`),
    docxParagraph(`Archive folder: ${archiveFolderName}`),
    docxParagraph("Lifecycle stages", "heading2"),
    ...(lifecycles.length
      ? lifecycles.map((lifecycle) => docxParagraph(`- ${lifecycle}`))
      : [docxParagraph("- Add lifecycle stages here.")]),
    docxParagraph("Top-level folder sections", "heading2"),
    ...(folderSections.length
      ? folderSections.map((section) => {
          const items = splitLines(section.items);
          const itemSummary = items.length ? items.join(", ") : "Add section items";
          return docxParagraph(
            `- ${getFolderSectionTitle(section)}: ${itemSummary}. Lifecycle folders: ${
              section.includeLifecycles ? "Yes" : "No"
            }.`,
          );
        })
      : [docxParagraph("- Add predefined or custom sections in the builder.")]),
    docxParagraph("System discovery", "heading1"),
    docxParagraph("Current problems to solve", "heading2"),
    docxParagraph(state.discoveryPainPoints || "Add the file and folder problems this system needs to solve."),
    docxParagraph("Products, services, and groupings", "heading2"),
    docxParagraph(state.discoveryProductsServices || "Add the products, services, programs, or offerings this system supports."),
    docxParagraph(state.discoveryFutureGroups || "Add future offerings, product/service categories, or industry-standard groupings."),
    docxParagraph("Access and source locations", "heading2"),
    docxParagraph(state.discoveryAccessLocations || "Add where products, services, and related content are accessed or stored."),
    docxParagraph("People and access needs", "heading2"),
    docxParagraph(state.discoveryUsers || "Add the people, teams, partners, or roles that need to use this system."),
    docxParagraph("Departments, divisions, and process ownership", "heading2"),
    docxParagraph(state.discoveryDepartments || "Add the departments or divisions involved in this file ecosystem."),
    docxParagraph(state.discoveryDepartmentProcesses || "Add the processes those groups own or that your team supports."),
    docxParagraph("Content inventory and relationships", "heading2"),
    docxParagraph(state.discoveryDepartmentContent || "Add the files, content, and working materials created by each group."),
    docxParagraph(state.discoveryRelationships || "Add relationships between products, services, departments, people, and existing files."),
    docxParagraph("Current structure and priority areas", "heading2"),
    docxParagraph(state.discoveryCurrentStructure || "Add what the current file structure looks like."),
    docxParagraph(state.discoveryPriorityAreas || "Add the files, folders, or spaces that are high priority or frequently used."),
    docxParagraph("How people find files", "heading2"),
    docxParagraph(state.discoveryFindability || "Add the search terms, labels, or relationships people use to find files."),
    docxParagraph("Naming clarity", "heading2"),
    docxParagraph(state.discoveryNamingIssues || "Add where names are confusing, inconsistent, or causing misplaced files."),
    docxParagraph("Migration and cleanup scope", "heading2"),
    docxParagraph(state.discoveryCleanupScope || "Add what should move, stay active, become reusable, or be archived."),
    docxParagraph("Folder map", "heading1"),
    docxParagraph("Use this map as the starting structure for the shared file system."),
    ...buildFolderTree(state).map((line) => docxParagraph(line, "code")),
    docxParagraph("Asset library", "heading1"),
    docxParagraph(
      "The asset library is a special reusable-file directory. Its subfolders are independent from the asset type abbreviations used in file names.",
    ),
    ...(assetLibraryFolders.length
      ? assetLibraryFolders.map((folder) => docxParagraph(`- ${cleanName(folder)}`))
      : [docxParagraph("- Add asset library folders here.")]),
    docxParagraph("Platform notes", "heading1"),
    ...(platforms.length
      ? platforms.map((platform) => docxParagraph(`- ${platform}`))
      : [docxParagraph("- Add storage platforms here.")]),
    docxParagraph("How to use this system", "heading1"),
    docxParagraph("1. Put new requests, briefs, and intake notes in the right group's intake folder."),
    docxParagraph("2. Keep active production files in the working lifecycle folders under the relevant group."),
    docxParagraph("3. Move approved work into final or published folders inside that group when it is ready to reuse."),
    docxParagraph("4. Track reusable assets in the asset index CSV."),
    docxParagraph(`5. Move inactive projects into ${archiveFolderName} on the agreed rhythm.`),
    docxParagraph("Naming guide", "heading1"),
    docxParagraph("Recommended pattern", "heading2"),
    docxParagraph(namingPattern || "Add naming convention parts", "code"),
    docxParagraph("Pattern structure", "heading2"),
    docxParagraph(namingPatternStructure || "Add naming convention parts", "code"),
    docxParagraph("Rules", "heading2"),
    docxParagraph(
      "- Use the details people would search for first: workstream, product, service, audience, channel, asset type abbreviation, or status.",
    ),
    docxParagraph("- Keep the order consistent so related files group together across departments, platforms, and workflows."),
    docxParagraph("- Use plain language that someone outside the project can understand."),
    docxParagraph("- Add a date only when timing changes how the file should be found, sorted, or used."),
    docxParagraph("- Avoid vague labels such as final, final-final, new, or latest."),
    docxParagraph("- Add status labels only when they change how the file should be used."),
    docxParagraph("- Let the storage platform or creative tool manage version history instead of adding versions to file or folder names."),
    docxParagraph(`- Keep source, review, and final files in lifecycle folders, then move inactive work to ${archiveFolderName}.`),
    docxParagraph("Pattern guidance", "heading2"),
    docxParagraph("- Start with the work relationship, such as a workstream, department, product, service, or project."),
    docxParagraph("- Add the audience, channel, campaign, or use case when it helps people recognize the file quickly."),
    docxParagraph("- End with the asset type abbreviation and status so people can tell what the file is without opening it."),
    docxParagraph("- Keep the pattern short enough that people will actually use it."),
    docxParagraph("Useful status labels", "heading2"),
    docxParagraph("- Draft"),
    docxParagraph("- Review"),
    docxParagraph("- Approved"),
    docxParagraph("- Published"),
    docxParagraph("- Archived"),
    docxParagraph("Asset types to standardize", "heading2"),
    ...(assetTypes.length
      ? assetTypes.map((assetType) => {
          const abbreviation = cleanAbbreviation(assetType.abbreviation);
          return docxParagraph(`- ${getAssetTypeLabel(assetType)}${abbreviation ? ` (${abbreviation})` : ""}`);
        })
      : [docxParagraph("- Add asset types here")]),
    docxParagraph("Asset index", "heading1"),
    docxParagraph(
      "Use the asset index CSV to track reusable files that people should be able to find without asking another person where they live.",
    ),
    docxParagraph("- Asset Name: Use the plain-language name people recognize."),
    docxParagraph("- Asset Type: Match one of the reusable asset types in the naming guide."),
    docxParagraph("- Asset Library Folder: Match one of the asset library folders created in this builder."),
    docxParagraph("- Folder Path: Point to the location in the asset library."),
    docxParagraph("- Status: Use a clear status such as Draft, Review, Approved, Published, or Archived."),
    docxParagraph("- Usage Notes: Capture audience, rights, channel, or reuse restrictions."),
    docxParagraph("- Review Date and Archive Date: Keep reusable materials from going stale."),
    docxParagraph("Permissions approach", "heading1"),
    docxParagraph(state.permissions),
    docxParagraph("Review cadence", "heading1"),
    docxParagraph(state.reviewCadence),
    docxParagraph("Archive cadence", "heading1"),
    docxParagraph(state.archiveCadence),
  ];

  return [
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
    '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">',
    "<w:body>",
    paragraphs.join(""),
    '<w:sectPr><w:pgSz w:w="12240" w:h="15840"/><w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440"/></w:sectPr>',
    "</w:body>",
    "</w:document>",
  ].join("");
}

function buildGuideDocx(state: BuilderState) {
  return createZip([
    {
      name: "[Content_Types].xml",
      data: encodeText(
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>',
      ),
    },
    {
      name: "_rels/.rels",
      data: encodeText(
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>',
      ),
    },
    {
      name: "word/document.xml",
      data: encodeText(buildGuideDocxXml(state)),
    },
  ]);
}

function buildGuideText(state: BuilderState) {
  const platforms = splitLines(state.platforms);
  const assetLibraryFolders = getActiveAssetLibraryFolders(state);
  const assetTypes = getActiveAssetTypes(state);
  const lifecycles = state.lifecycles.filter((lifecycle) => !isArchiveLifecycle(lifecycle));
  const folderSections = getActiveFolderSections(state);
  const namingPattern = buildNamingPattern(state, "example");
  const namingPatternStructure = buildNamingPattern(state, "label");

  return [
    `${displayValue(state.systemName, cleanName(state.systemName))} Guide`,
    `Created for ${displayValue(state.team)} at ${displayValue(state.organization)}.`,
    "",
    "System summary",
    `Organization: ${displayValue(state.organization)}`,
    `Team: ${displayValue(state.team)}`,
    `Owner: ${displayValue(state.owner)}`,
    `Root folder: ${cleanName(state.systemName)}`,
    "",
    "Download set",
    "- AI Refinement Prompt: Paste this into an AI assistant to pressure-test and improve the system.",
    "- Guide (Word): Use the editable Word document as the human-readable operating guide for the structure.",
    "- Guide (TXT): Use this plain text copy when you need a lightweight version to paste into another tool.",
    "- Asset Index: Use the CSV to track reusable assets, ownership, review dates, and archive timing.",
    "- Setup Script: Run the PowerShell script only after the folder map has been reviewed.",
    "",
    "Folder structure settings",
    `Sorting numbers: ${state.includeSortingNumbers ? "On" : "Off"}`,
    `Archive folder: ${archiveFolderName}`,
    "",
    "Lifecycle stages",
    ...(lifecycles.length ? lifecycles.map((lifecycle) => `- ${lifecycle}`) : ["- Add lifecycle stages here."]),
    "",
    "Top-level folder sections",
    ...(folderSections.length
      ? folderSections.map((section) => {
          const items = splitLines(section.items);
          const itemSummary = items.length ? items.join(", ") : "Add section items";
          return `- ${getFolderSectionTitle(section)}: ${itemSummary}. Lifecycle folders: ${
            section.includeLifecycles ? "Yes" : "No"
          }.`;
        })
      : ["- Add predefined or custom sections in the builder."]),
    "",
    "System discovery",
    "",
    "Current problems to solve",
    state.discoveryPainPoints || "Add the file and folder problems this system needs to solve.",
    "",
    "Products, services, and groupings",
    state.discoveryProductsServices || "Add the products, services, programs, or offerings this system supports.",
    state.discoveryFutureGroups || "Add future offerings, product/service categories, or industry-standard groupings.",
    "",
    "Access and source locations",
    state.discoveryAccessLocations || "Add where products, services, and related content are accessed or stored.",
    "",
    "People and access needs",
    state.discoveryUsers || "Add the people, teams, partners, or roles that need to use this system.",
    "",
    "Departments, divisions, and process ownership",
    state.discoveryDepartments || "Add the departments or divisions involved in this file ecosystem.",
    state.discoveryDepartmentProcesses || "Add the processes those groups own or that your team supports.",
    "",
    "Content inventory and relationships",
    state.discoveryDepartmentContent || "Add the files, content, and working materials created by each group.",
    state.discoveryRelationships || "Add relationships between products, services, departments, people, and existing files.",
    "",
    "Current structure and priority areas",
    state.discoveryCurrentStructure || "Add what the current file structure looks like.",
    state.discoveryPriorityAreas || "Add the files, folders, or spaces that are high priority or frequently used.",
    "",
    "How people find files",
    state.discoveryFindability || "Add the search terms, labels, or relationships people use to find files.",
    "",
    "Naming clarity",
    state.discoveryNamingIssues || "Add where names are confusing, inconsistent, or causing misplaced files.",
    "",
    "Migration and cleanup scope",
    state.discoveryCleanupScope || "Add what should move, stay active, become reusable, or be archived.",
    "",
    "Folder map",
    "Use this map as the starting structure for the shared file system.",
    ...buildFolderTree(state),
    "",
    "Asset library",
    "The asset library is a special reusable-file directory. Its subfolders are independent from the asset type abbreviations used in file names.",
    ...(assetLibraryFolders.length
      ? assetLibraryFolders.map((folder) => `- ${cleanName(folder)}`)
      : ["- Add asset library folders here."]),
    "",
    "Platform notes",
    ...(platforms.length ? platforms.map((platform) => `- ${platform}`) : ["- Add storage platforms here."]),
    "",
    "How to use this system",
    "1. Put new requests, briefs, and intake notes in the right group's intake folder.",
    "2. Keep active production files in the working lifecycle folders under the relevant group.",
    "3. Move approved work into final or published folders inside that group when it is ready to reuse.",
    "4. Track reusable assets in the asset index CSV.",
    `5. Move inactive projects into ${archiveFolderName} on the agreed rhythm.`,
    "",
    "Naming guide",
    "",
    "Recommended pattern",
    namingPattern || "Add naming convention parts",
    "",
    "Pattern structure",
    namingPatternStructure || "Add naming convention parts",
    "",
    "Rules",
    "- Use the details people would search for first: workstream, product, service, audience, channel, asset type abbreviation, or status.",
    "- Keep the order consistent so related files group together across departments, platforms, and workflows.",
    "- Use plain language that someone outside the project can understand.",
    "- Add a date only when timing changes how the file should be found, sorted, or used.",
    "- Avoid vague labels such as final, final-final, new, or latest.",
    "- Add status labels only when they change how the file should be used.",
    "- Let the storage platform or creative tool manage version history instead of adding versions to file or folder names.",
    `- Keep source, review, and final files in lifecycle folders, then move inactive work to ${archiveFolderName}.`,
    "",
    "Pattern guidance",
    "- Start with the work relationship, such as a workstream, department, product, service, or project.",
    "- Add the audience, channel, campaign, or use case when it helps people recognize the file quickly.",
    "- End with the asset type abbreviation and status so people can tell what the file is without opening it.",
    "- Keep the pattern short enough that people will actually use it.",
    "",
    "Useful status labels",
    "- Draft",
    "- Review",
    "- Approved",
    "- Published",
    "- Archived",
    "",
    "Asset types to standardize",
    ...(assetTypes.length
      ? assetTypes.map((assetType) => {
          const abbreviation = cleanAbbreviation(assetType.abbreviation);
          return `- ${getAssetTypeLabel(assetType)}${abbreviation ? ` (${abbreviation})` : ""}`;
        })
      : ["- Add asset types here"]),
    "",
    "Asset index",
    "Use the asset index CSV to track reusable files that people should be able to find without asking another person where they live.",
    "- Asset Name: Use the plain-language name people recognize.",
    "- Asset Type: Match one of the reusable asset types in the naming guide.",
    "- Asset Library Folder: Match one of the asset library folders created in this builder.",
    "- Folder Path: Point to the location in the asset library.",
    "- Status: Use a clear status such as Draft, Review, Approved, Published, or Archived.",
    "- Usage Notes: Capture audience, rights, channel, or reuse restrictions.",
    "- Review Date and Archive Date: Keep reusable materials from going stale.",
    "",
    "Permissions approach",
    state.permissions,
    "",
    "Review cadence",
    state.reviewCadence,
    "",
    "Archive cadence",
    state.archiveCadence,
    "",
  ].join("\n");
}

function buildAssetIndexCsv(state: BuilderState) {
  const assetLibraryFolders = getActiveAssetLibraryFolders(state);
  const assetTypes = getActiveAssetTypes(state);
  const firstAssetType = assetTypes[0];
  const firstAssetTypeLabel = firstAssetType ? getAssetTypeLabel(firstAssetType) : "Image";
  const firstAssetTypeAbbreviation = firstAssetType ? cleanAbbreviation(firstAssetType.abbreviation) : "IMG";
  const firstLibraryFolder = assetLibraryFolders[0] ? cleanName(assetLibraryFolders[0]) : "Logos";
  const rows = [
    [
      "Asset Name",
      "Asset Type",
      "Asset Type Abbreviation",
      "Owner",
      "Asset Library Folder",
      "Folder Path",
      "Status",
      "Usage Notes",
      "Review Date",
      "Archive Date",
    ],
    [
      "Example homepage hero",
      firstAssetTypeLabel,
      firstAssetTypeAbbreviation,
      displayValue(state.owner),
      firstLibraryFolder,
      `${cleanName(state.systemName)}/${getAssetLibraryFolderName(state.includeSortingNumbers)}/${firstLibraryFolder}`,
      "Approved",
      "Replace this row with a real reusable asset.",
      "",
      "",
    ],
  ];

  return rows
    .map((row) => row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(","))
    .join("\n");
}

function buildAiRefinementPrompt(state: BuilderState) {
  const platforms = splitLines(state.platforms);
  const assetLibraryFolders = getActiveAssetLibraryFolders(state);
  const assetTypes = getActiveAssetTypes(state);
  const lifecycles = state.lifecycles.filter((lifecycle) => !isArchiveLifecycle(lifecycle));
  const folderSections = getActiveFolderSections(state);
  const namingPattern = buildNamingPattern(state, "example");
  const namingPatternStructure = buildNamingPattern(state, "label");

  return [
    "You are helping refine a practical file and asset management system.",
    "",
    "Your task:",
    "Review the discovery answers, folder map, asset library, naming convention, and governance notes below. Recommend improvements that make the system easier to adopt, easier to search, and easier to maintain.",
    "",
    "Keep these principles:",
    "- Keep the structure simple enough that real people will use it.",
    "- Use the team's natural relationships: products, services, audiences, channels, departments, workflows, and reusable assets.",
    "- Avoid duplicate places for the same work.",
    "- Keep active work separate from reusable assets and archived work.",
    "- Do not put dates or version numbers in published file names unless timing is essential to finding or using the file.",
    "- Prefer platform version history, metadata, tags, and custom fields for details that change over time.",
    "- Make archive easy to find by keeping it as ~Archive.",
    "",
    "Return:",
    "1. A short diagnosis of the current structure.",
    "2. Suggested folder structure changes, with reasons.",
    "3. Suggested asset library folder changes, with reasons.",
    "4. Suggested naming convention changes, with examples.",
    "5. Metadata, tag, or search terms that would help people find files.",
    "6. Governance recommendations for ownership, permissions, review, and archive cadence.",
    "7. Questions I should answer before finalizing the system.",
    "",
    "System summary:",
    `- Organization: ${displayValue(state.organization)}`,
    `- Team or department: ${displayValue(state.team)}`,
    `- System name: ${displayValue(state.systemName)}`,
    `- Owner: ${displayValue(state.owner)}`,
    `- Sorting numbers enabled: ${state.includeSortingNumbers ? "Yes" : "No"}`,
    `- Archive folder: ${archiveFolderName}`,
    "",
    "Discovery answers:",
    `- Problems to solve: ${displayValue(state.discoveryPainPoints)}`,
    `- Products, services, or offerings: ${displayValue(state.discoveryProductsServices)}`,
    `- Access and source locations: ${displayValue(state.discoveryAccessLocations)}`,
    `- Future offerings or natural groupings: ${displayValue(state.discoveryFutureGroups)}`,
    `- People and access needs: ${displayValue(state.discoveryUsers)}`,
    `- Departments or divisions: ${displayValue(state.discoveryDepartments)}`,
    `- Process ownership: ${displayValue(state.discoveryDepartmentProcesses)}`,
    `- Content created by each group: ${displayValue(state.discoveryDepartmentContent)}`,
    `- Relationships between products, departments, people, and files: ${displayValue(state.discoveryRelationships)}`,
    `- Current file structure: ${displayValue(state.discoveryCurrentStructure)}`,
    `- Priority files, folders, or spaces: ${displayValue(state.discoveryPriorityAreas)}`,
    `- How people naturally look for files: ${displayValue(state.discoveryFindability)}`,
    `- Naming or misplacement issues: ${displayValue(state.discoveryNamingIssues)}`,
    `- Migration and cleanup scope: ${displayValue(state.discoveryCleanupScope)}`,
    "",
    "Platforms or storage locations:",
    ...(platforms.length ? platforms.map((platform) => `- ${platform}`) : ["- Add storage platforms here."]),
    "",
    "Folder map:",
    "```text",
    buildFolderTree(state).join("\n"),
    "```",
    "",
    "Lifecycle stages:",
    ...(lifecycles.length ? lifecycles.map((lifecycle) => `- ${lifecycle}`) : ["- Add lifecycle stages here."]),
    "",
    "Top-level folder sections:",
    ...(folderSections.length
      ? folderSections.map((section) => {
          const items = splitLines(section.items);
          const itemSummary = items.length ? items.join(", ") : "Add section items";
          return `- ${getFolderSectionTitle(section)}: ${itemSummary}. Lifecycle folders: ${
            section.includeLifecycles ? "Yes" : "No"
          }.`;
        })
      : ["- Add predefined or custom sections in the builder."]),
    "",
    "Asset library folders:",
    ...(assetLibraryFolders.length
      ? assetLibraryFolders.map((folder) => `- ${cleanName(folder)}`)
      : ["- Add asset library folders here."]),
    "",
    "Reusable asset types and abbreviations:",
    ...(assetTypes.length
      ? assetTypes.map((assetType) => {
          const abbreviation = cleanAbbreviation(assetType.abbreviation);
          return `- ${getAssetTypeLabel(assetType)}${abbreviation ? ` (${abbreviation})` : ""}`;
        })
      : ["- Add asset types here."]),
    "",
    "Naming convention:",
    `- Example: ${namingPattern || "Add naming convention parts"}`,
    `- Structure: ${namingPatternStructure || "Add naming convention parts"}`,
    "",
    "Governance:",
    `- Permissions approach: ${state.permissions}`,
    `- Review cadence: ${state.reviewCadence}`,
    `- Archive cadence: ${state.archiveCadence}`,
    "",
    "Please be specific and practical. If you suggest a change, explain what problem it solves.",
    "",
  ].join("\n");
}

function createResources(state: BuilderState): DownloadResource[] {
  const prefix = cleanName(state.systemName).toLowerCase();

  return [
    {
      filename: `${prefix}-ai-refinement-prompt.txt`,
      label: "AI Refinement Prompt",
      description: "A copy-and-paste prompt that uses these answers to refine the folder system with an AI assistant.",
      content: buildAiRefinementPrompt(state),
      type: "text/plain;charset=utf-8",
    },
    {
      filename: `${prefix}-guide.docx`,
      label: "Guide (Word)",
      description: "An editable Word guide with the folder map, usage notes, naming rules, and governance cadence.",
      content: buildGuideDocx(state),
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    },
    {
      filename: `${prefix}-guide.txt`,
      label: "Guide (TXT)",
      description: "A plain text guide with the same structure and direction for copying into other tools.",
      content: buildGuideText(state),
      type: "text/plain;charset=utf-8",
    },
    {
      filename: `${prefix}-asset-index.csv`,
      label: "Asset Index",
      description: "A starter spreadsheet for tracking reusable files and assets.",
      content: buildAssetIndexCsv(state),
      type: "text/csv;charset=utf-8",
    },
    {
      filename: `${prefix}-setup.ps1`,
      label: "Setup Script",
      description: "A PowerShell script that creates the folder structure locally.",
      content: buildPowerShellScript(state),
      type: "text/plain;charset=utf-8",
    },
  ];
}

type ClearableTextareaProps = {
  clearLabel: string;
  disabled?: boolean;
  rows: number;
  value: string;
  onChange: (value: string) => void;
};

function ClearableTextarea({ clearLabel, disabled = false, rows, value, onChange }: ClearableTextareaProps) {
  return (
    <div className="resource-textarea-control">
      <textarea rows={rows} value={value} disabled={disabled} onChange={(event) => onChange(event.target.value)} />
      <button
        aria-label={clearLabel}
        className="secondary resource-clear-textarea-button"
        disabled={disabled || !value}
        type="button"
        onClick={() => onChange("")}
      >
        Clear
      </button>
    </div>
  );
}

export default function FileManagementResourceBuilder() {
  const [state, setState] = useState<BuilderState>(defaultState);
  const [draggedItem, setDraggedItem] = useState<DraggedItem | null>(null);
  const [dropTarget, setDropTarget] = useState<DropTarget | null>(null);
  const [showDiscovery, setShowDiscovery] = useState(true);
  const resources = useMemo(() => createResources(state), [state]);
  const folderPreview = useMemo(() => buildFolderTree(state).join("\n"), [state]);
  const namingPatternPreview = useMemo(() => buildNamingPattern(state, "example"), [state]);
  const namingPatternStructure = useMemo(() => buildNamingPattern(state, "label"), [state]);
  const availableFolderSectionTemplates = useMemo(
    () => defaultFolderSections.filter((template) => !state.folderSections.some((section) => section.id === template.id)),
    [state.folderSections],
  );

  function updateField(field: TextField, value: string) {
    setState((current) => ({ ...current, [field]: value }));
  }

  function updateToggle(field: ToggleField, value: boolean) {
    setState((current) => ({ ...current, [field]: value }));
  }

  function updateNamingSpacer(value: NamingSpacer) {
    setState((current) => ({ ...current, namingSpacer: value }));
  }

  function updateLifecycleStages(value: string) {
    setState((current) => ({
      ...current,
      lifecycles: splitLines(value),
    }));
  }

  function reorderDragList(list: DragList, fromIndex: number, toIndex: number) {
    if (fromIndex === toIndex) {
      return;
    }

    setState((current) => {
      if (list === "folderSections") {
        return {
          ...current,
          folderSections: reorderList(current.folderSections, fromIndex, toIndex),
        };
      }

      if (list === "assetLibraryFolders") {
        return {
          ...current,
          assetLibraryFolders: reorderList(current.assetLibraryFolders, fromIndex, toIndex),
        };
      }

      if (list === "assetTypes") {
        return {
          ...current,
          assetTypes: reorderList(current.assetTypes, fromIndex, toIndex),
        };
      }

      return {
        ...current,
        namingParts: reorderList(current.namingParts, fromIndex, toIndex),
      };
    });
  }

  function getDragListLength(list: DragList) {
    if (list === "folderSections") {
      return state.folderSections.length;
    }

    if (list === "assetLibraryFolders") {
      return state.assetLibraryFolders.length;
    }

    if (list === "assetTypes") {
      return state.assetTypes.length;
    }

    return state.namingParts.length;
  }

  function handleReorderKeyDown(event: KeyboardEvent<HTMLButtonElement>, list: DragList, index: number) {
    const listLength = getDragListLength(list);
    const keyMoves: Record<string, number> = {
      ArrowLeft: index - 1,
      ArrowUp: index - 1,
      ArrowRight: index + 1,
      ArrowDown: index + 1,
      Home: 0,
      End: listLength - 1,
    };
    const nextIndex = keyMoves[event.key];

    if (nextIndex === undefined || nextIndex < 0 || nextIndex >= listLength || nextIndex === index) {
      return;
    }

    event.preventDefault();
    reorderDragList(list, index, nextIndex);
  }

  function startDrag(event: DragEvent<HTMLButtonElement>, list: DragList, index: number) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", `${list}:${index}`);
    setDraggedItem({ list, index });
    setDropTarget(null);
  }

  function allowDrop(event: DragEvent<HTMLDivElement>, list: DragList, index: number) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";

    if (draggedItem?.list === list) {
      setDropTarget({ list, index });
    }
  }

  function dropItem(event: DragEvent<HTMLDivElement>, list: DragList, index: number) {
    event.preventDefault();
    const [sourceList, sourceIndexValue] = event.dataTransfer.getData("text/plain").split(":");
    const sourceIndex = Number(sourceIndexValue);

    if (sourceList === list && Number.isInteger(sourceIndex)) {
      reorderDragList(list, sourceIndex, index);
    }

    setDraggedItem(null);
    setDropTarget(null);
  }

  function endDrag() {
    setDraggedItem(null);
    setDropTarget(null);
  }

  function updateFolderSection(id: string, field: keyof FolderSection, value: string | boolean) {
    setState((current) => ({
      ...current,
      folderSections: current.folderSections.map((section) =>
        section.id === id ? { ...section, [field]: value } : section,
      ),
    }));
  }

  function addFolderSectionTemplate(template: FolderSection) {
    setState((current) => {
      if (current.folderSections.some((section) => section.id === template.id)) {
        return current;
      }

      return {
        ...current,
        folderSections: [...current.folderSections, cloneFolderSection(template)],
      };
    });
  }

  function addCustomFolderSection() {
    setState((current) => ({
      ...current,
      folderSections: [
        ...current.folderSections,
        {
          id: `custom-section-${Date.now()}`,
          title: "",
          description: "Add the folder groups that matter to this part of the system.",
          items: "",
          includeLifecycles: false,
          isCustom: true,
        },
      ],
    }));
  }

  function removeFolderSection(id: string) {
    setState((current) => ({
      ...current,
      folderSections: current.folderSections.filter((section) => section.id !== id),
    }));
  }

  function updateAssetLibraryFolder(index: number, value: string) {
    setState((current) => ({
      ...current,
      assetLibraryFolders: current.assetLibraryFolders.map((folder, folderIndex) =>
        folderIndex === index ? value : folder,
      ),
    }));
  }

  function addAssetLibraryFolder() {
    setState((current) => ({
      ...current,
      assetLibraryFolders: [...current.assetLibraryFolders, ""],
    }));
  }

  function removeAssetLibraryFolder(index: number) {
    setState((current) => ({
      ...current,
      assetLibraryFolders:
        current.assetLibraryFolders.length > 1
          ? current.assetLibraryFolders.filter((_, folderIndex) => folderIndex !== index)
          : current.assetLibraryFolders,
    }));
  }

  function updateAssetType(id: string, field: "name" | "abbreviation", value: string) {
    setState((current) => ({
      ...current,
      assetTypes: current.assetTypes.map((assetType) =>
        assetType.id === id ? { ...assetType, [field]: value } : assetType,
      ),
    }));
  }

  function addAssetType() {
    setState((current) => ({
      ...current,
      assetTypes: [
        ...current.assetTypes,
        {
          id: `asset-type-${Date.now()}`,
          name: "",
          abbreviation: "",
        },
      ],
    }));
  }

  function removeAssetType(id: string) {
    setState((current) => ({
      ...current,
      assetTypes:
        current.assetTypes.length > 1
          ? current.assetTypes.filter((assetType) => assetType.id !== id)
          : current.assetTypes,
    }));
  }

  function updateNamingPart(id: string, field: "label" | "example", value: string) {
    setState((current) => ({
      ...current,
      namingParts: current.namingParts.map((part) => (part.id === id ? { ...part, [field]: value } : part)),
    }));
  }

  function addNamingPart() {
    setState((current) => ({
      ...current,
      namingParts: [
        ...current.namingParts,
        {
          id: `naming-part-${Date.now()}`,
          label: "",
          example: "",
        },
      ],
    }));
  }

  function removeNamingPart(id: string) {
    setState((current) => ({
      ...current,
      namingParts:
        current.namingParts.length > 1
          ? current.namingParts.filter((part) => part.id !== id)
          : current.namingParts,
    }));
  }

  function downloadAll() {
    resources.forEach((resource, index) => {
      window.setTimeout(() => downloadResource(resource), index * 200);
    });
  }

  function toggleDiscovery() {
    if (showDiscovery) {
      setState((current) => ({
        ...current,
        organization: "",
        team: "",
        systemName: "",
        owner: "",
        platforms: "",
        discoveryPainPoints: "",
        discoveryProductsServices: "",
        discoveryAccessLocations: "",
        discoveryFutureGroups: "",
        discoveryUsers: "",
        discoveryDepartments: "",
        discoveryDepartmentProcesses: "",
        discoveryDepartmentContent: "",
        discoveryRelationships: "",
        discoveryCurrentStructure: "",
        discoveryPriorityAreas: "",
        discoveryFindability: "",
        discoveryNamingIssues: "",
        discoveryCleanupScope: "",
      }));
    }

    setShowDiscovery((current) => !current);
  }

  function resetBuilder() {
    setState(defaultState);
    setShowDiscovery(true);
  }

  return (
    <section className="section highlight-light-green resource-builder-section">
      <div className="page-container page-section-content">
        <div className="resource-builder">
          <form className="resource-builder-form">
            <div className="resource-discovery-panel">
              <div className="resource-builder-section-header resource-builder-section-header-with-action">
                <SearchAdvanced aria-hidden="true" />
                <div>
                  <h2>System discovery</h2>
                  <p>Answer the setup questions that reveal how the team finds, shares, and retires files.</p>
                </div>
                <button className="secondary" type="button" onClick={toggleDiscovery}>
                  {showDiscovery ? "Skip discovery" : "Show discovery"}
                </button>
              </div>

              {showDiscovery ? (
                <>
                  <div className="resource-field-grid">
                    <label>
                      <span>Organization</span>
                      <small className="resource-field-description">
                        Name the company, department, client, or personal workspace this system will support.
                      </small>
                      <input
                        value={state.organization}
                        onChange={(event) => updateField("organization", event.target.value)}
                      />
                    </label>
                    <label>
                      <span>Team or department</span>
                      <small className="resource-field-description">
                        Identify the group that will use and maintain these folders most often.
                      </small>
                      <input value={state.team} onChange={(event) => updateField("team", event.target.value)} />
                    </label>
                    <label>
                      <span>System name</span>
                      <small className="resource-field-description">
                        Choose the root folder name that should appear at the top of the structure.
                      </small>
                      <input
                        value={state.systemName}
                        onChange={(event) => updateField("systemName", event.target.value)}
                      />
                    </label>
                    <label>
                      <span>System owner</span>
                      <small className="resource-field-description">
                        Add the person, role, or team responsible for keeping the system useful.
                      </small>
                      <input value={state.owner} onChange={(event) => updateField("owner", event.target.value)} />
                    </label>
                  </div>

                  <div className="resource-field-grid resource-field-grid-wide">
                    <label>
                      <span>Platforms or storage locations</span>
                      <small className="resource-field-description">
                        List the shared drives, libraries, tools, or cloud platforms where files currently live.
                      </small>
                      <ClearableTextarea
                        clearLabel="Clear platforms or storage locations"
                        rows={4}
                        value={state.platforms}
                        onChange={(value) => updateField("platforms", value)}
                      />
                    </label>
                  </div>

                  <div className="resource-field-grid resource-field-grid-wide">
              <div className="resource-discovery-group-heading">
                <h3>Company and ecosystem</h3>
                <p>Start with what the organization offers, where content lives, and who touches it.</p>
              </div>
              <label>
                <span>What problems should this system solve?</span>
                <small className="resource-field-description">
                  Capture the current friction: duplicate files, unclear finals, missing ownership, stale assets, or
                  folders people avoid.
                </small>
                <ClearableTextarea
                  clearLabel="Clear problems this system should solve"
                  rows={4}
                  value={state.discoveryPainPoints}
                  onChange={(value) => updateField("discoveryPainPoints", value)}
                />
              </label>
              <label>
                <span>What products, services, or offerings does this support?</span>
                <small className="resource-field-description">
                  Blend the PDF discovery prompts for products and services with the practical scope of the folder
                  system.
                </small>
                <ClearableTextarea
                  clearLabel="Clear products services or offerings"
                  rows={4}
                  value={state.discoveryProductsServices}
                  onChange={(value) => updateField("discoveryProductsServices", value)}
                />
              </label>
              <label>
                <span>Where are those offerings and their content accessed or stored?</span>
                <small className="resource-field-description">
                  Include websites, portals, shared drives, software, servers, vendors, spreadsheets, and other source
                  locations.
                </small>
                <ClearableTextarea
                  clearLabel="Clear access and storage locations"
                  rows={4}
                  value={state.discoveryAccessLocations}
                  onChange={(value) => updateField("discoveryAccessLocations", value)}
                />
              </label>
              <label>
                <span>Are there future offerings or natural groupings?</span>
                <small className="resource-field-description">
                  Note new products in development, product or service categories, recurring programs, or industry
                  standards that should shape the structure.
                </small>
                <ClearableTextarea
                  clearLabel="Clear future offerings or natural groupings"
                  rows={4}
                  value={state.discoveryFutureGroups}
                  onChange={(value) => updateField("discoveryFutureGroups", value)}
                />
              </label>
              <label>
                <span>Who needs to use or access these files?</span>
                <small className="resource-field-description">
                  List internal and external touchpoints: contributors, SMEs, leaders, sales, IT, marketing, customer
                  service, clients, vendors, prospects, and partners.
                </small>
                <ClearableTextarea
                  clearLabel="Clear users and access needs"
                  rows={4}
                  value={state.discoveryUsers}
                  onChange={(value) => updateField("discoveryUsers", value)}
                />
              </label>

              <div className="resource-discovery-group-heading">
                <h3>Departments and relationships</h3>
                <p>Map who owns the work, what they create, and how those pieces relate.</p>
              </div>
              <label>
                <span>What departments or divisions are involved?</span>
                <small className="resource-field-description">
                  Identify the departments, divisions, vendors, or partner groups that need clear ownership in the
                  system.
                </small>
                <ClearableTextarea
                  clearLabel="Clear departments or divisions"
                  rows={4}
                  value={state.discoveryDepartments}
                  onChange={(value) => updateField("discoveryDepartments", value)}
                />
              </label>
              <label>
                <span>What processes do those teams own or support?</span>
                <small className="resource-field-description">
                  Combine owned processes with the processes your team helps with, such as approvals, publishing,
                  campaigns, reporting, or sales enablement.
                </small>
                <ClearableTextarea
                  clearLabel="Clear team processes"
                  rows={4}
                  value={state.discoveryDepartmentProcesses}
                  onChange={(value) => updateField("discoveryDepartmentProcesses", value)}
                />
              </label>
              <label>
                <span>What content is created by each group?</span>
                <small className="resource-field-description">
                  Include external and internal content: websites, ads, reports, dashboards, portals, talking points,
                  invoices, and working documents.
                </small>
                <ClearableTextarea
                  clearLabel="Clear content created by each group"
                  rows={4}
                  value={state.discoveryDepartmentContent}
                  onChange={(value) => updateField("discoveryDepartmentContent", value)}
                />
              </label>
              <label>
                <span>How are products, departments, people, and files related?</span>
                <small className="resource-field-description">
                  Capture relationships that should be reflected in folders, metadata, naming, permissions, or asset
                  reuse.
                </small>
                <ClearableTextarea
                  clearLabel="Clear product department people and file relationships"
                  rows={4}
                  value={state.discoveryRelationships}
                  onChange={(value) => updateField("discoveryRelationships", value)}
                />
              </label>

              <div className="resource-discovery-group-heading">
                <h3>Your team and current files</h3>
                <p>Document the existing file reality before deciding what to rebuild.</p>
              </div>
              <label>
                <span>What does the current file structure look like?</span>
                <small className="resource-field-description">
                  Summarize the current folders, platforms, personal drives, shared libraries, and tool-specific spaces.
                </small>
                <ClearableTextarea
                  clearLabel="Clear current file structure"
                  rows={4}
                  value={state.discoveryCurrentStructure}
                  onChange={(value) => updateField("discoveryCurrentStructure", value)}
                />
              </label>
              <label>
                <span>What files, folders, or spaces are highest priority?</span>
                <small className="resource-field-description">
                  Identify frequently used areas that should not be buried, plus files that are important for daily work.
                </small>
                <ClearableTextarea
                  clearLabel="Clear highest priority files folders or spaces"
                  rows={4}
                  value={state.discoveryPriorityAreas}
                  onChange={(value) => updateField("discoveryPriorityAreas", value)}
                />
              </label>
              <label>
                <span>How do people naturally look for files?</span>
                <small className="resource-field-description">
                  Note the labels people search by and the easy or hard-to-find items the structure should address.
                </small>
                <ClearableTextarea
                  clearLabel="Clear natural file search behavior"
                  rows={4}
                  value={state.discoveryFindability}
                  onChange={(value) => updateField("discoveryFindability", value)}
                />
              </label>
              <label>
                <span>Are names confusing or are files often misplaced?</span>
                <small className="resource-field-description">
                  Capture naming issues, vague labels, duplicate files, inconsistent abbreviations, and common
                  misplacements.
                </small>
                <ClearableTextarea
                  clearLabel="Clear naming and misplaced file issues"
                  rows={4}
                  value={state.discoveryNamingIssues}
                  onChange={(value) => updateField("discoveryNamingIssues", value)}
                />
              </label>
              <label>
                <span>What should move, stay active, or archive?</span>
                <small className="resource-field-description">
                  Define the cleanup scope before building: active work, reusable assets, historical projects, and
                  anything that should not be migrated.
                </small>
                <ClearableTextarea
                  clearLabel="Clear migration and cleanup scope"
                  rows={4}
                  value={state.discoveryCleanupScope}
                  onChange={(value) => updateField("discoveryCleanupScope", value)}
                />
              </label>
            </div>
                </>
              ) : (
                <div className="resource-discovery-skipped">
                  <p>Discovery is skipped for now. Starter discovery answers have been cleared, and you can reopen this section anytime.</p>
                </div>
              )}
            </div>

            <section className="resource-form-section">
              <div className="resource-builder-section-header">
                <Folder aria-hidden="true" />
                <div>
                  <h2>Folder structure</h2>
                  <p>Choose the lifecycle stages and top-level groupings that shape the folder map.</p>
                </div>
              </div>

              <div className="resource-optional-field resource-structure-option">
                <label className="resource-optional-toggle">
                  <input
                    type="checkbox"
                    checked={state.includeSortingNumbers}
                    onChange={(event) => updateToggle("includeSortingNumbers", event.target.checked)}
                  />
                  <span>Sorting numbers</span>
                </label>
                <small className="resource-field-description">
                  Prefix major folders and lifecycle stages with numbers so they sort in a fixed order.
                </small>
              </div>

              <fieldset className="resource-checklist">
                <legend>
                  <span>Lifecycle stages</span>
                  <small className="resource-field-description">
                    Edit the nested working stages added inside the activated groups. Archive always stays at the root
                    as {archiveFolderName}.
                  </small>
                </legend>
                <ClearableTextarea
                  clearLabel="Clear lifecycle stages"
                  rows={5}
                  value={state.lifecycles.join("\n")}
                  onChange={updateLifecycleStages}
                />
              </fieldset>

              <div className="resource-section-template-picker">
                <span>Add predefined section</span>
                <small className="resource-field-description">
                  Choose only the folder groupings this system needs. Removed sections can be added back here.
                </small>
                <div className="resource-section-template-buttons">
                  {availableFolderSectionTemplates.length ? (
                    availableFolderSectionTemplates.map((template) => (
                      <button
                        className="secondary"
                        key={template.id}
                        type="button"
                        onClick={() => addFolderSectionTemplate(template)}
                      >
                        <Add aria-hidden="true" />
                        {template.title}
                      </button>
                    ))
                  ) : (
                    <p>All predefined sections have been added.</p>
                  )}
                </div>
              </div>

              <div className="resource-field-grid resource-field-grid-wide">
              {state.folderSections.map((section, index) => (
                <div
                  className={`resource-optional-field resource-folder-section-field${
                    draggedItem?.list === "folderSections" && draggedItem.index === index ? " is-dragging" : ""
                  }${
                    dropTarget?.list === "folderSections" && dropTarget.index === index ? " is-drop-target" : ""
                  }`}
                  key={section.id}
                  onDragLeave={() => setDropTarget(null)}
                  onDragOver={(event) => allowDrop(event, "folderSections", index)}
                  onDrop={(event) => dropItem(event, "folderSections", index)}
                >
                  <div className="resource-folder-section-header">
                    <button
                      aria-label={`Reorder ${getFolderSectionTitle(section)}. Use arrow keys to move.`}
                      className="resource-drag-handle resource-folder-section-drag-handle"
                      draggable
                      type="button"
                      onDragEnd={endDrag}
                      onDragStart={(event) => startDrag(event, "folderSections", index)}
                      onKeyDown={(event) => handleReorderKeyDown(event, "folderSections", index)}
                    >
                      <DragVertical aria-hidden="true" />
                    </button>
                    <div className="resource-folder-section-heading">
                      <span className="resource-folder-section-type">
                        {section.isCustom ? "Custom section" : section.title}
                      </span>
                      {section.isCustom ? (
                        <label className="resource-custom-section-name">
                          <span>Section name</span>
                          <input
                            value={section.title}
                            placeholder="Regions"
                            onChange={(event) => updateFolderSection(section.id, "title", event.target.value)}
                          />
                        </label>
                      ) : null}
                      <small className="resource-field-description resource-folder-section-description">
                        {section.description}
                      </small>
                    </div>
                    <button
                      aria-label={`Remove ${getFolderSectionTitle(section)}`}
                      className="resource-icon-button secondary resource-folder-section-delete"
                      type="button"
                      onClick={() => removeFolderSection(section.id)}
                    >
                      <TrashCan aria-hidden="true" />
                    </button>
                  </div>

                  <label className="resource-optional-toggle resource-nested-toggle">
                    <input
                      type="checkbox"
                      checked={section.includeLifecycles}
                      onChange={(event) =>
                        updateFolderSection(section.id, "includeLifecycles", event.target.checked)
                      }
                    />
                    <span>Add lifecycle folders inside each {getFolderSectionTitle(section).toLowerCase()}</span>
                  </label>
                  <ClearableTextarea
                    clearLabel={`Clear ${getFolderSectionTitle(section)} items`}
                    rows={4}
                    value={section.items}
                    onChange={(value) => updateFolderSection(section.id, "items", value)}
                  />
                </div>
              ))}
              </div>
              <button className="secondary resource-add-row-button" type="button" onClick={addCustomFolderSection}>
                <Add aria-hidden="true" />
                Add custom section
              </button>
            </section>

            <section className="resource-form-section">
              <div className="resource-builder-section-header">
                <ImageIcon aria-hidden="true" />
                <div>
                  <h2>Assets & naming</h2>
                  <p>Define reusable asset labels and the naming pattern people should follow.</p>
                </div>
              </div>

              <div className="resource-field-grid resource-field-grid-wide">
              <div className="resource-asset-library-field">
                <span>Asset library folders</span>
                <small className="resource-field-description">
                  Add the special subdirectories that live inside the asset library, such as Logos, Reports,
                  Templates, or Photos. These are separate from the asset type abbreviations used in file names.
                </small>
                <div className="resource-asset-library-list">
                  {state.assetLibraryFolders.map((folder, index) => (
                    <div
                      className={`resource-asset-library-row${
                        draggedItem?.list === "assetLibraryFolders" && draggedItem.index === index ? " is-dragging" : ""
                      }${
                        dropTarget?.list === "assetLibraryFolders" && dropTarget.index === index ? " is-drop-target" : ""
                      }`}
                      key={`asset-library-folder-${index}`}
                      onDragLeave={() => setDropTarget(null)}
                      onDragOver={(event) => allowDrop(event, "assetLibraryFolders", index)}
                      onDrop={(event) => dropItem(event, "assetLibraryFolders", index)}
                    >
                      <button
                        aria-label={`Reorder ${folder || `library folder ${index + 1}`}. Use arrow keys to move.`}
                        className="resource-drag-handle"
                        draggable
                        type="button"
                        onDragEnd={endDrag}
                        onDragStart={(event) => startDrag(event, "assetLibraryFolders", index)}
                        onKeyDown={(event) => handleReorderKeyDown(event, "assetLibraryFolders", index)}
                      >
                        <DragVertical aria-hidden="true" />
                      </button>
                      <label>
                        <span>Folder name</span>
                        <input
                          value={folder}
                          placeholder={`Library folder ${index + 1}`}
                          onChange={(event) => updateAssetLibraryFolder(index, event.target.value)}
                        />
                      </label>
                      <button
                        aria-label={`Remove ${folder || `library folder ${index + 1}`}`}
                        className="resource-icon-button secondary"
                        disabled={state.assetLibraryFolders.length <= 1}
                        type="button"
                        onClick={() => removeAssetLibraryFolder(index)}
                      >
                        <TrashCan aria-hidden="true" />
                      </button>
                    </div>
                  ))}
                </div>
                <button className="secondary resource-add-row-button" type="button" onClick={addAssetLibraryFolder}>
                  <Add aria-hidden="true" />
                  Add asset library folder
                </button>
              </div>
              <div className="resource-asset-type-field">
                <span>Reusable asset types</span>
                <small className="resource-field-description">
                  Add the full asset type name and the short abbreviation people should use in file names.
                </small>
                <div className="resource-asset-type-list">
                  {state.assetTypes.map((assetType, index) => (
                    <div
                      className={`resource-asset-type-row${
                        draggedItem?.list === "assetTypes" && draggedItem.index === index ? " is-dragging" : ""
                      }${dropTarget?.list === "assetTypes" && dropTarget.index === index ? " is-drop-target" : ""
                      }`}
                      key={assetType.id}
                      onDragLeave={() => setDropTarget(null)}
                      onDragOver={(event) => allowDrop(event, "assetTypes", index)}
                      onDrop={(event) => dropItem(event, "assetTypes", index)}
                    >
                      <button
                        aria-label={`Reorder ${getAssetTypeLabel(assetType)}. Use arrow keys to move.`}
                        className="resource-drag-handle"
                        draggable
                        type="button"
                        onDragEnd={endDrag}
                        onDragStart={(event) => startDrag(event, "assetTypes", index)}
                        onKeyDown={(event) => handleReorderKeyDown(event, "assetTypes", index)}
                      >
                        <DragVertical aria-hidden="true" />
                      </button>
                      <label>
                        <span>Full name</span>
                        <input
                          value={assetType.name}
                          placeholder={`Asset type ${index + 1}`}
                          onChange={(event) => updateAssetType(assetType.id, "name", event.target.value)}
                        />
                      </label>
                      <label>
                        <span>Abbreviation</span>
                        <input
                          value={assetType.abbreviation}
                          placeholder="IMG"
                          onChange={(event) => updateAssetType(assetType.id, "abbreviation", event.target.value)}
                        />
                      </label>
                      <button
                        aria-label={`Remove ${getAssetTypeLabel(assetType)}`}
                        className="resource-icon-button secondary"
                        disabled={state.assetTypes.length <= 1}
                        type="button"
                        onClick={() => removeAssetType(assetType.id)}
                      >
                        <TrashCan aria-hidden="true" />
                      </button>
                    </div>
                  ))}
                </div>
                <button className="secondary resource-add-row-button" type="button" onClick={addAssetType}>
                  <Add aria-hidden="true" />
                  Add asset type
                </button>
              </div>
              <div className="resource-naming-builder">
                <span>File naming pattern</span>
                <small className="resource-field-description">
                  Select a spacer, then add the details people should include so files are findable without relying on
                  memory, dates, or folder context alone.
                </small>

                <label className="resource-naming-spacer">
                  <span>Spacer type</span>
                  <select
                    value={state.namingSpacer}
                    onChange={(event) => updateNamingSpacer(event.target.value as NamingSpacer)}
                  >
                    <option value="underscore">Underscore (_)</option>
                    <option value="hyphen">Hyphen (-)</option>
                    <option value="space">Space hyphen space ( - )</option>
                  </select>
                </label>

                <div className="resource-naming-part-list">
                  {state.namingParts.map((part, index) => (
                    <div
                      className={`resource-naming-part-row${
                        draggedItem?.list === "namingParts" && draggedItem.index === index ? " is-dragging" : ""
                      }${dropTarget?.list === "namingParts" && dropTarget.index === index ? " is-drop-target" : ""
                      }`}
                      key={part.id}
                      onDragLeave={() => setDropTarget(null)}
                      onDragOver={(event) => allowDrop(event, "namingParts", index)}
                      onDrop={(event) => dropItem(event, "namingParts", index)}
                    >
                      <button
                        aria-label={`Reorder ${part.label || `part ${index + 1}`}. Use arrow keys to move.`}
                        className="resource-drag-handle"
                        draggable
                        type="button"
                        onDragEnd={endDrag}
                        onDragStart={(event) => startDrag(event, "namingParts", index)}
                        onKeyDown={(event) => handleReorderKeyDown(event, "namingParts", index)}
                      >
                        <DragVertical aria-hidden="true" />
                      </button>
                      <label>
                        <span>Convention part</span>
                        <input
                          value={part.label}
                          placeholder={`Part ${index + 1}`}
                          onChange={(event) => updateNamingPart(part.id, "label", event.target.value)}
                        />
                      </label>
                      <label>
                        <span>Example</span>
                        <input
                          value={part.example}
                          placeholder="Example"
                          onChange={(event) => updateNamingPart(part.id, "example", event.target.value)}
                        />
                      </label>
                      <button
                        aria-label={`Remove ${part.label || `part ${index + 1}`}`}
                        className="resource-icon-button secondary"
                        disabled={state.namingParts.length <= 1}
                        type="button"
                        onClick={() => removeNamingPart(part.id)}
                      >
                        <TrashCan aria-hidden="true" />
                      </button>
                    </div>
                  ))}
                </div>
                <button className="secondary resource-add-row-button" type="button" onClick={addNamingPart}>
                  <Add aria-hidden="true" />
                  Add naming option
                </button>
              </div>
              </div>
            </section>

            <section className="resource-governance-section">
              <div className="resource-builder-section-header">
                <Rule aria-hidden="true" />
                <div>
                  <h2>Governance</h2>
                  <p>Set the expectations that keep the file system healthy after launch.</p>
                </div>
              </div>

              <div className="resource-field-grid resource-field-grid-wide">
              <label>
                <span>Permissions approach</span>
                <small className="resource-field-description">
                  Describe who can view, edit, approve, archive, or restrict sensitive materials.
                </small>
                <ClearableTextarea
                  clearLabel="Clear permissions approach"
                  rows={4}
                  value={state.permissions}
                  onChange={(value) => updateField("permissions", value)}
                />
              </label>
              <label>
                <span>Review cadence</span>
                <small className="resource-field-description">
                  Set how often owners should check usage, access, naming rules, and stale content.
                </small>
                <ClearableTextarea
                  clearLabel="Clear review cadence"
                  rows={3}
                  value={state.reviewCadence}
                  onChange={(value) => updateField("reviewCadence", value)}
                />
              </label>
              <label>
                <span>Archive cadence</span>
                <small className="resource-field-description">
                  Decide when inactive projects should move out of active working folders.
                </small>
                <ClearableTextarea
                  clearLabel="Clear archive cadence"
                  rows={3}
                  value={state.archiveCadence}
                  onChange={(value) => updateField("archiveCadence", value)}
                />
              </label>
            </div>
            </section>

            <div className="resource-builder-actions">
              <button type="button" onClick={downloadAll}>
                <Download aria-hidden="true" />
                Download All Resources
              </button>
              <button type="button" className="secondary" onClick={resetBuilder}>
                <Reset aria-hidden="true" />
                Reset
              </button>
            </div>
          </form>

          <aside className="resource-builder-output" aria-label="Generated resource preview">
            <div className="resource-preview-card">
              <div className="resource-builder-section-header">
                <Document aria-hidden="true" />
                <div>
                  <h2>Preview</h2>
                  <p>This updates as the form changes.</p>
                </div>
              </div>
              <pre>{folderPreview}</pre>
              <div className="resource-filename-preview">
                <h3>Filename preview</h3>
                <code>{namingPatternPreview || "Add naming examples"}</code>
                <p>Structure: {namingPatternStructure || "Add naming convention parts"}</p>
              </div>
            </div>
          </aside>
        </div>

        <section className="resource-download-section">
          <div className="resource-builder-section-header">
            <Download aria-hidden="true" />
            <div>
              <h2>Downloads</h2>
              <p>Download individual pieces of the system when you only need one starting point.</p>
            </div>
          </div>

          <div className="resource-download-grid">
            {resources.map((resource) => (
              <article key={resource.filename} className="resource-download-card">
                <h3>{resource.label}</h3>
                <p>{resource.description}</p>
                <button type="button" className="secondary" onClick={() => downloadResource(resource)}>
                  <Download aria-hidden="true" />
                  Download
                </button>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
