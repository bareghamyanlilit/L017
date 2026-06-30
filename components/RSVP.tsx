"use client";

import { anim, rsvp } from "@/data/data";
import { useState } from "react";
import { motion } from "framer-motion";

type FamilySide = "Հարսի կողմից" | "Փեսայի կողմից" | null;
type Attending = "Այո" | "Ոչ" | null;

interface FormDataType {
  fullName: string;
  familySide: FamilySide;
  attending: Attending;
  guestCount: number | string;
  comment: string;
}

interface MessageType {
  type: "success" | "error" | "";
  text: string;
}

export default function AttendanceGuests() {
  const [formData, setFormData] = useState<FormDataType>({
    fullName: "",
    familySide: null,
    attending: null,
    guestCount: "",
    comment: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<MessageType>({
    type: "",
    text: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "guestCount"
          ? value === ""
            ? ""
            : Math.max(0, Number(value))
          : value,
    }));
  };

  const handleAttendingChange = (value: Attending) => {
    setFormData((prev) => ({
      ...prev,
      attending: value,
    }));
  };

  const handleFamilySideChange = (value: FamilySide) => {
    setFormData((prev) => ({
      ...prev,
      familySide: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage({ type: "", text: "" });

    if (!formData.fullName.trim()) {
      setMessage({
        type: "error",
        text: "Խնդրում ենք մուտքագրել ձեր ամբողջական անունն ու ազգանունը։",
      });
      return;
    }

    if (!formData.familySide) {
      setMessage({
        type: "error",
        text: "Խնդրում ենք նշել՝ ո՞ր կողմից եք։",
      });
      return;
    }

    if (formData.attending === null) {
      setMessage({
        type: "error",
        text: "Խնդրում ենք նշել՝ արդյոք մասնակցում եք։",
      });
      return;
    }

    const guestCountNumber = Number(formData.guestCount);
    if (
      formData.attending === "Այո" &&
      (!formData.guestCount || guestCountNumber <= 0)
    ) {
      setMessage({
        type: "error",
        text: "Խնդրում ենք մուտքագրել հյուրերի քանակը։",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(rsvp, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          fullName: formData.fullName,
          familySide: formData.familySide || "",
          attending: formData.attending || "",
          guestCount:
            formData.attending === "Այո" ? String(formData.guestCount) : "0",
          comment: formData.comment || "",
        }).toString(),
      });

      setMessage({
        type: "success",
        text: "Շնորհակալություն։ Ձեր պատասխանը հաջողությամբ ուղարկվեց։",
      });

      setFormData({
        fullName: "",
        familySide: null,
        attending: null,
        guestCount: "",
        comment: "",
      });

      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error(err);

      setMessage({
        type: "error",
        text: "Տեղի է ունեցել սխալ, խնդրում ենք փորձել կրկին։",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl p-6 mt-20">
      <motion.h1
        {...anim}
        className="text-3xl font-bold text-vrayi text-center mb-20 tracking-widest"
      >
        Հրավերի պատասխան
      </motion.h1>

      {message.text && (
        <motion.div
          {...anim}
          className={`p-4 mb-4 rounded-lg ${
            message.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {message.text}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="text-xl space-y-8">
        {/* Full Name */}
        <div>
          <p className="text-start mb-4 ">Խնդրում ենք գրել Ձեր անուն, ազգանունը</p>
          <motion.input
            {...anim}
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Անուն Ազգանուն"
            className="w-full p-3 border-b rounded-lg"
          />
        </div>
        <div>
          <p className="text-start  mb-4">
            Խնդրում ենք նշել թե ում կողմից եք հրավիրված
          </p>
          {/* Family Side */}
          <motion.div {...anim} className="flex gap-3">
            <button
              type="button"
              onClick={() => handleFamilySideChange("Հարսի կողմից")}
              className={`flex-1 p-3 rounded-lg border transition-all duration-200 ${
                formData.familySide === "Հարսի կողմից"
                  ? "bg-guyn text-[#FFFDFB] border-guyn"
                  : " text-black "
              }`}
            >
              Հարսի
            </button>

            <button
              type="button"
              onClick={() => handleFamilySideChange("Փեսայի կողմից")}
              className={`flex-1 p-3 rounded-lg border transition-all duration-200 ${
                formData.familySide === "Փեսայի կողմից"
                  ? "bg-guyn text-[#FFFDFB] border-guyn"
                  : " text-black "
              }`}
            >
              Փեսայի
            </button>
          </motion.div>
        </div>
        <div>
          <p className="text-start  mb-4">Խնդրում ենք նշել գալու եք, թե՞ ոչ</p>
          {/* Attending */}
          <motion.div {...anim} className="flex gap-3">
            <button
              type="button"
              onClick={() => handleAttendingChange("Այո")}
              className={`flex-1 p-3 rounded-lg border transition-all duration-200 ${
                formData.attending === "Այո"
                  ? "bg-guyn text-[#FFFDFB] border-guyn"
                  : " text-black "
              }`}
            >
              Այո
            </button>

            <button
              type="button"
              onClick={() => handleAttendingChange("Ոչ")}
              className={`flex-1 p-3 rounded-lg border transition-all duration-200 ${
                formData.attending === "Ոչ"
                  ? "bg-guyn text-[#FFFDFB] border-guyn"
                  : " text-black "
              }`}
            >
              Ոչ
            </button>
          </motion.div>
        </div>
        {/* Guest Count */}
        {formData.attending === "Այո" && (
          <div>
            <p className="text-start  mb-4">Քանի հոգով եք գալու</p>

            <motion.input
              {...anim}
              type="number"
              name="guestCount"
              value={formData.guestCount}
              onChange={handleInputChange}
              className="w-full p-3 border-b rounded-lg"
              placeholder="Քանակ"
              min={0}
            />
          </div>
        )}

        <div>
          <p className="text-start  mb-3">
            Ցանկության դեպքում կարող եք թողնել մեկնաբանություն
          </p>

          {/* Comment */}
          <motion.textarea
            {...anim}
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg"
            placeholder="Մեկնաբանություն"
          />
        </div>

        {/* Submit */}
        <motion.button
          {...anim}
          type="submit"
          disabled={isSubmitting}
          className="w-full p-3 bg-guyn text-[#FFFDFB] rounded-lg"
        >
          {isSubmitting ? "Ուղարկվում է..." : "Ուղարկել"}
        </motion.button>
      </form>
    </div>
  );
}
