import { useState } from "react";
import React from "react";
import { SidebarLabel } from "./sidebar-label/sidebar-label";

export default function Sidebar() {
  const [tags] = useState([
    "Tag one",
    "Tag two",
    "Tag three",
    "tag with a really long annoying name",
  ]);

  const noteTags = tags.map((tagName) => (
    <SidebarLabel
      radioId={`${tagName}-tab`}
      iconName="label"
      labelText={tagName}
      key={tagName}
    ></SidebarLabel>
  ));

  return (
    <div className="w-56">
      <SidebarLabel
        radioId="notes-tab"
        iconName="sticky_note_2"
        labelText="Notes"
        checkedInitially={true}
      ></SidebarLabel>
      {...noteTags}
      <SidebarLabel
        radioId="archive-tab"
        iconName="archive"
        labelText="Archive"
      ></SidebarLabel>
      <SidebarLabel
        radioId="trash-tab"
        iconName="delete"
        labelText="Trash"
      ></SidebarLabel>
    </div>
  );
}
