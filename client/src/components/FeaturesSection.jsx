import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../ultils/motion";
import bgTnSm from "../assets/bgTnSm.png";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🎯",
      title: "Tầm nhìn",
      description:
        "Trở thành tập đoàn dẫn đầu trong cung cấp giải pháp sáng tạo & bền vững cho khu vực.",
    },
    {
      icon: "💡",
      title: "Sứ mệnh",
      description:
        "Cung cấp dịch vụ đột phá trong công nghệ, đầu tư và thương hiệu, mang lại giá trị thực tiễn.",
    },
    {
      icon: "🌟",
      title: "Giá trị cốt lõi",
      description: "Sáng tạo – Bền vững – Hiệu quả – Hợp tác – Uy tín.",
    },
  ];

  return (
    <div
      style={{ background: `url(${bgTnSm}) center center / cover no-repeat` }}
    >
      <motion.section
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <motion.div variants={fadeIn("up", 0.3)} className="text-center mb-12">
          <motion.h2
            variants={textVariant(0.2)}
            className="text-3xl font-bold mb-4"
          >
            Tầm nhìn - Sứ mệnh - Giá trị cốt lõi
          </motion.h2>
          <motion.p variants={fadeIn("up", 0.4)} className="text-gray-600">
            ARIA HOLDINGS luôn kiên định với tầm nhìn chiến lược, sứ mệnh bền
            vững và các giá trị cốt lõi nhằm tạo ra những đột phá trong từng
            lĩnh vực hoạt động.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.5)}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.3 * (index + 1))}
              className="flex flex-col items-center p-6"
            >
              <motion.div
                variants={fadeIn("down", 0.4 * (index + 1))}
                className="w-24 h-24 rounded-full mb-6 flex items-center justify-center"
                style={{
                  backgroundColor:
                    index === 0
                      ? "#F1EFFD"
                      : index === 1
                      ? "#FFE7E7"
                      : "#FFF3E4",
                }}
              >
                <motion.div
                  variants={fadeIn("up", 0.5 * (index + 1))}
                  className="text-3xl"
                >
                  {feature.icon}
                </motion.div>
              </motion.div>
              <motion.h3
                variants={textVariant(0.3)}
                className="text-2xl font-medium mb-3"
              >
                {feature.title}
              </motion.h3>
              <motion.p
                variants={fadeIn("up", 0.6 * (index + 1))}
                className="text-gray-500 text-center"
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeIn("up", 0.7)} className="text-center mt-12">
          <motion.button
            variants={fadeIn("up", 0.8)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors relative"
          >
            Trở thành Đối tác
            <div className="absolute -z-10 w-full h-full rounded-full bg-blue-600/30 blur-xl top-0 left-0"></div>
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default FeaturesSection;
