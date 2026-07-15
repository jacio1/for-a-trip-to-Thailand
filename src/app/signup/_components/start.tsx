"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import SelectFull from "@/src/components/ui/select/SelectFull";
import Tag from "@/src/components/ui/buttons/Tag";

interface TagItem {
  name: string;
  isActive: boolean;
}

interface Option {
  title: string;
  value: string;
}

interface StartProps {
  setNewTags: (tags: string[]) => void;
  setNewRole: (role: "student" | "teacher" | "none") => void;
}

export default function Start({ setNewTags, setNewRole }: StartProps) {
  const { t } = useTranslation();

  const [tags, setTags] = useState<TagItem[]>([
    { name: "math", isActive: true },
    { name: "computer science", isActive: false },
    { name: "biology", isActive: false },
    { name: "art", isActive: false },
    { name: "chemistry", isActive: false },
    { name: "literature", isActive: false },
    { name: "physics", isActive: false },
    { name: "socials", isActive: false },
  ]);

  const roles: Option[] = [
    { title: "student", value: "student" },
    { title: "teacher", value: "teacher" },
    { title: "none", value: "none" },
  ];

  const toggleTag = (tagName: string) => {
    const updatedTags = tags.map((tag) => (tag.name === tagName ? { ...tag, isActive: !tag.isActive } : tag));
    setTags(updatedTags);
    const activeTags = updatedTags.filter((tag) => tag.isActive).map((tag) => tag.name);
    setNewTags(activeTags);
  };

  const handleRoleChange = (option: Option) => {
    setNewRole(option.value as "student" | "teacher" | "none");
  };

  return (
    <div className="min-w-full h-full p-3 flex gap-3 flex-col justify-center relative">
      <p className="fs-l fw-600">{t("SubjectTags")}</p>
      <div className="w-full flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <Tag key={tag.name} isActive={tag.isActive} text={tag.name} onClick={() => toggleTag(tag.name)} />
        ))}
      </div>
      <SelectFull label="Role" size="l" options={roles} activeIndex={0} onChange={handleRoleChange} />
    </div>
  );
}
