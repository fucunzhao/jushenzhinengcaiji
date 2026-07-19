window.TASK_STEPS = {
  "source": "tasks-data.js + training_manual_extracted.txt + rules_extracted.txt",
  "ruleVersion": "2026-07-19",
  "count": 453,
  "items": [
    {
      "id": "115",
      "scene": "客厅",
      "name": "客厅_开关抽屉取物_自定义条件_free_G",
      "props": "抽屉，物品（玩具等）",
      "actions": "拿，打开，推拉，翻转",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好抽屉，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近抽屉。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触抽屉，先拿，再打开，再推拉，再翻转。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "取出目标物后，关闭或整理抽屉。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用物品（玩具等）配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 110,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "121",
      "scene": "客厅",
      "name": "客厅_钥匙扣封装组装_自定义条件_free_G",
      "props": "钥匙扣、钥匙环、挂件、卡扣、挂钩、钥匙收纳盒",
      "actions": "组装、对齐、扣紧、封装、悬挂、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好钥匙扣，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近钥匙扣。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触钥匙扣，先组装，再对齐，再扣紧，再封装，再悬挂，再归位。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把钥匙扣放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用钥匙环配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 112,
        "maxWithExtensionSeconds": 142,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "126",
      "scene": "客厅",
      "name": "客厅_快递单隐私销毁_自定义条件_free_G",
      "props": "快递盒、记号笔/涂改液",
      "actions": "抓取、撕扯/涂抹、压实、投放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好快递盒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近快递盒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触快递盒，先抓取，再撕扯，再涂抹，再压实，再投放。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把快递盒处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用记号笔配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 96,
        "maxWithExtensionSeconds": 120,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "139",
      "scene": "客厅",
      "name": "客厅_访客拖鞋消毒归位_自定义条件_free_G",
      "props": "拿起、喷洒、擦拭、摆放",
      "actions": "拿起、喷洒、擦拭、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好拖鞋，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近拖鞋。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触拖鞋，先拿起，再喷洒，再擦拭，再摆放。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把拖鞋放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用喷洒配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 110,
        "maxWithExtensionSeconds": 140,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "130",
      "scene": "客厅",
      "name": "客厅_花瓶假花整理_自定义条件_free_G",
      "props": "花瓶、假花",
      "actions": "拿、摘、插、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好花瓶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近花瓶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触花瓶，先拿，再摘，再插，再归位。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把花瓶放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用假花配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 104,
        "maxWithExtensionSeconds": 134,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "127",
      "scene": "客厅",
      "name": "客厅_收纳箱卡扣锁紧_自定义条件_free_G",
      "props": "",
      "actions": "按压、扣合、固定、检查",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好收纳箱，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近收纳箱。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触收纳箱，先按压，再扣合，再固定，再检查。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把收纳箱放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 98,
        "maxWithExtensionSeconds": 128,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "124",
      "scene": "客厅",
      "name": "客厅_线缆理顺归整_自定义条件_free_G",
      "props": "HDMI线、电源线、AV线等",
      "actions": "拿、理顺、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好HDMI线，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近HDMI线。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触HDMI线，先拿，再理顺，再归位。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把HDMI线放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用电源线配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 82,
        "maxWithExtensionSeconds": 112,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "150",
      "scene": "客厅",
      "name": "客厅_取包与钥匙等随身物品_自定义条件_free_G",
      "props": "包包、钥匙、玄关台面、钥匙收纳盒",
      "actions": "拿、放、插、入",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好包包，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近包包。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触包包，先拿，再放，再插，再入。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把包包处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用钥匙配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 92,
        "maxWithExtensionSeconds": 122,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "148",
      "scene": "客厅",
      "name": "客厅_钥匙挂钩悬挂归位_自定义条件_free_G",
      "props": "钥匙、门禁卡、挂钩、钥匙收纳盒",
      "actions": "整理、悬挂、排列、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好钥匙，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近钥匙。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触钥匙，先整理，再悬挂，再排列，再归位。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把钥匙放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用门禁卡配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 110,
        "maxWithExtensionSeconds": 140,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "140",
      "scene": "客厅",
      "name": "客厅_桌面碎屑清扫收纳_自定义条件_free_G",
      "props": "迷你扫把、桌面收纳盒、碎屑垃圾",
      "actions": "扫、翻转、固定",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好迷你扫把，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近迷你扫把。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触迷你扫把，先扫，再翻转，再固定。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把迷你扫把放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用桌面收纳盒配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 100,
        "maxWithExtensionSeconds": 130,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "227",
      "scene": "客厅",
      "name": "客厅_茶几水杯收纳清洗_自定义条件_free_G",
      "props": "水杯、马克杯、茶几、杯架、水槽",
      "actions": "拿、倾倒、冲洗、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好水杯，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近水杯。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触水杯，先拿，再倾倒，再冲洗，再归位。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把水杯放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用马克杯配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 105,
        "maxWithExtensionSeconds": 135,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "274",
      "scene": "客厅",
      "name": "客厅_玄关宠物用品收纳归位_自定义条件_free_G",
      "props": "宠物用品、宠物玩具、拾便袋、收纳筐、玄关、鞋柜",
      "actions": "拿、擦拭、分类、收纳",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好宠物用品，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近宠物用品。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触宠物用品，先拿，再擦拭，再分类，再收纳。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把宠物用品放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用宠物玩具配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 116,
        "maxWithExtensionSeconds": 146,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "351",
      "scene": "客厅",
      "name": "客厅_冲泡咖啡_自定义条件_free_G",
      "props": "咖啡、杯子、搅拌工具",
      "actions": "拿、倒、搅拌",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好咖啡，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近咖啡。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触咖啡，先拿，再倒，再搅拌。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把咖啡放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用杯子配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 92,
        "maxWithExtensionSeconds": 122,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "371",
      "scene": "客厅",
      "name": "客厅_快递包裹拆解_自定义条件_free_G",
      "props": "剪刀、快递箱",
      "actions": "划开、撕开、取出、压扁、堆叠",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好剪刀，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近剪刀。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触剪刀，先划开，再撕开，再取出，再压扁，再堆叠。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "取出目标物后，关闭或整理剪刀。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用快递箱配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 103,
        "maxWithExtensionSeconds": 127,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含剪刀类道具，规则变更提示此类任务不要优先做；如必须做，需管理员确认安全和质检口径。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "374",
      "scene": "客厅",
      "name": "客厅_冲泡茶叶_自定义条件_free_G",
      "props": "茶叶、水杯、搅拌工具",
      "actions": "取、放、搅拌",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好茶叶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近茶叶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触茶叶，先取，再放，再搅拌。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把茶叶放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用水杯配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 92,
        "maxWithExtensionSeconds": 122,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "385",
      "scene": "客厅",
      "name": "客厅_沙发清洁与整理_自定义条件_free_G",
      "props": "沙发，擦拭布",
      "actions": "取放，擦除，归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好沙发，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近沙发。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触沙发，先取放，再擦除，再归位。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把沙发放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用擦拭布配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 109,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "404",
      "scene": "客厅",
      "name": "客厅_补充填充纸巾盒_自定义条件_free_G",
      "props": "纸巾、纸巾盒",
      "actions": "打开、放入、理顺、合上、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好纸巾，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近纸巾。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触纸巾，先打开，再放入，再理顺，再合上，再归位。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把纸巾放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用纸巾盒配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 93,
        "maxWithExtensionSeconds": 123,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "413",
      "scene": "客厅",
      "name": "客厅_除尘掸灰笔记本电脑_自定义条件_free_G",
      "props": "笔记本电脑,除尘掸",
      "actions": "擦拭,扫拢",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好笔记本电脑，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近笔记本电脑。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触笔记本电脑，先擦拭，再扫拢。",
          "seconds": 18
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把笔记本电脑擦净或清理到任务要求状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用除尘掸配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 55,
        "recommendedSeconds": 90,
        "maxWithExtensionSeconds": 120,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "414",
      "scene": "客厅",
      "name": "客厅_理线整理游戏手柄_自定义条件_free_G",
      "props": "游戏手柄,扎带",
      "actions": "卷起,系绑",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好游戏手柄，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近游戏手柄。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触游戏手柄，先卷起，再系绑。",
          "seconds": 18
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把游戏手柄放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用扎带配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 55,
        "recommendedSeconds": 90,
        "maxWithExtensionSeconds": 120,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "418",
      "scene": "客厅",
      "name": "客厅_解绑松开遥控器收纳盒_自定义条件_free_G",
      "props": "遥控器、遥控器收纳盒",
      "actions": "扣住、拨动、取出、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好遥控器，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近遥控器。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触遥控器，先扣住，再拨动，再取出，再归位。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把遥控器放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用遥控器收纳盒配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 104,
        "maxWithExtensionSeconds": 134,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "419",
      "scene": "客厅",
      "name": "客厅_插接通电台灯_自定义条件_free_G",
      "props": "台灯、电源线",
      "actions": "抓住、插接、按压",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好台灯，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近台灯。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触台灯，先抓住，再插接，再按压。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把台灯处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用电源线配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 103,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "420",
      "scene": "客厅",
      "name": "客厅_喷洒擦净电视机_自定义条件_free_G",
      "props": "清洁剂、抹布",
      "actions": "握持、按压、喷洒、擦拭",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好清洁剂，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近清洁剂。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触清洁剂，先握持，再按压，再喷洒，再擦拭。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把清洁剂擦净或清理到任务要求状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用抹布配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 104,
        "maxWithExtensionSeconds": 134,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "511",
      "scene": "客厅",
      "name": "客厅_帽子整理与挂钩_自定义条件_free_G",
      "props": "帽子、帽撑、帆布袋、挂钩",
      "actions": "取出、整理、挂起",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好帽子，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近帽子。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触帽子，先取出，再整理，再挂起。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把帽子放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用帽撑配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 103,
        "maxWithExtensionSeconds": 133,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "512",
      "scene": "客厅",
      "name": "客厅_茶吧机清理_自定义条件_free_G",
      "props": "茶吧机、茶壶、烧水壶、抹布",
      "actions": "拿去、擦拭、盖紧",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好茶吧机，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近茶吧机。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触茶吧机，先拿去，再擦拭，再盖紧。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把茶吧机放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用茶壶配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 103,
        "maxWithExtensionSeconds": 133,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "515",
      "scene": "客厅",
      "name": "客厅_瓜子倾倒摆盘_自定义条件_free_G",
      "props": "瓜子，夹子，盘子",
      "actions": "打开，倾倒，夹",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好瓜子，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近瓜子。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触瓜子，先打开，再倾倒，再夹。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把瓜子盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用夹子配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 110,
        "maxWithExtensionSeconds": 140,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "522",
      "scene": "客厅",
      "name": "客厅_更换笔芯_自定义条件_free_G",
      "props": "笔、笔芯、笔帽",
      "actions": "动作：取下、拧开、插入、拧紧、盖上",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好笔，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近笔。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触笔，先动作：取下，再拧开，再插入，再拧紧，再盖上。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把笔盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用笔芯配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 96,
        "maxWithExtensionSeconds": 122,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "527",
      "scene": "客厅",
      "name": "客厅_吸管水杯组装使用_自定义条件_free_G",
      "props": "塑料吸管杯、硅胶吸管、防尘盖",
      "actions": "插接、扣合、旋紧、开盖",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好塑料吸管杯，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近塑料吸管杯。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触塑料吸管杯，先插接，再扣合，再旋紧，再开盖。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把塑料吸管杯盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用硅胶吸管配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 115,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "528",
      "scene": "客厅",
      "name": "客厅_药盒拆分分装_自定义条件_free_G",
      "props": "道具：铝塑板药片、便携分格小药盒\n调味瓶倾倒归位",
      "actions": "动作：撕拆、倒出、分装、扣盖",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好道具：铝塑板药片，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近道具：铝塑板药片。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触道具：铝塑板药片，先动作：撕拆，再倒出，再分装，再扣盖。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把道具：铝塑板药片盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用便携分格小药盒配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 107,
        "maxWithExtensionSeconds": 137,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "547",
      "scene": "客厅",
      "name": "客厅_多色玩具宝石分层玻璃瓶堆叠_自定义条件_free_G",
      "props": "各色玩具石头、玻璃密封罐、贴画",
      "actions": "舀取、震实、旋紧、粘贴",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好各色玩具石头，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近各色玩具石头。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触各色玩具石头，先舀取，再震实，再旋紧，再粘贴。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把各色玩具石头盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用玻璃密封罐配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 119,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "551",
      "scene": "客厅",
      "name": "客厅_漏斗辅助灌装客厅专用清洁剂_自定义条件_free_G",
      "props": "喷壶、塑料漏斗、清洁剂",
      "actions": "握持、拿、倾倒、取下、旋拧、按压",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好喷壶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近喷壶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触喷壶，先握持，再拿，再倾倒，再取下，再旋拧，再按压。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把喷壶盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用塑料漏斗配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 113,
        "maxWithExtensionSeconds": 143,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "561",
      "scene": "客厅",
      "name": "客厅_闲置快递箱折叠墙角堆叠_自定义条件_free_G",
      "props": "闲置快递箱",
      "actions": "折叠、对齐、切割、平移、堆叠",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好闲置快递箱，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近闲置快递箱。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触闲置快递箱，先折叠，再对齐，再切割，再平移，再堆叠。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把闲置快递箱处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 90,
        "maxWithExtensionSeconds": 114,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "590",
      "scene": "客厅",
      "name": "客厅_拆封瓶装客厅除味喷雾_自定义条件_free_G",
      "props": "除味喷雾",
      "actions": "撕拆、按压、喷洒、摆正、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好除味喷雾，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近除味喷雾。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触除味喷雾，先撕拆，再按压，再喷洒，再摆正，再摆放。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把除味喷雾处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 90,
        "maxWithExtensionSeconds": 120,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "592",
      "scene": "客厅",
      "name": "客厅_组装小型客厅多肉花架_自定义条件_free_G",
      "props": "多肉花架、多肉盆栽",
      "actions": "拼接、扣夹、托举、摆正、放置",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好多肉花架，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近多肉花架。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触多肉花架，先拼接，再扣夹，再托举，再摆正，再放置。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把多肉花架处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用多肉盆栽配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 93,
        "maxWithExtensionSeconds": 123,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "594",
      "scene": "客厅",
      "name": "客厅_花瓶换水修剪_自定义条件_free_G",
      "props": "花瓶、鲜花、台面、剪刀、水壶",
      "actions": "拿起,倾倒,修剪,装入,摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好花瓶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近花瓶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触花瓶，先拿起，再倾倒，再修剪，再装入，再摆放。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把花瓶放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用鲜花配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 112,
        "maxWithExtensionSeconds": 142,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含剪刀类道具，规则变更提示此类任务不要优先做；如必须做，需管理员确认安全和质检口径。",
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "597",
      "scene": "客厅",
      "name": "客厅_组装桌子_自定义条件_free_G",
      "props": "桌板、支腿、螺丝刀、防滑垫",
      "actions": "套入、旋拧、按压测试、贴放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好桌板，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近桌板。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触桌板，先套入，再旋拧，再按压测试，再贴放。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把桌板处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用支腿配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 92,
        "maxWithExtensionSeconds": 118,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "598",
      "scene": "客厅",
      "name": "客厅_清洁空调出风口_自定义条件_free_G",
      "props": "毛刷、抹布、棉签、空调",
      "actions": "扫除、擦拭、刮除、擦干、拨动",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好毛刷，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近毛刷。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触毛刷，先扫除，再擦拭，再刮除，再擦干，再拨动。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把毛刷擦净或清理到任务要求状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用抹布配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 117,
        "maxWithExtensionSeconds": 147,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "600",
      "scene": "客厅",
      "name": "客厅_倾倒烟灰缸_自定义条件_free_G",
      "props": "烟灰缸、垃圾桶",
      "actions": "抓取、倾倒、摆放、对准",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好烟灰缸，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近烟灰缸。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触烟灰缸，先抓取，再倾倒，再摆放，再对准。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把烟灰缸放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用垃圾桶配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 96,
        "maxWithExtensionSeconds": 126,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "601",
      "scene": "客厅",
      "name": "客厅_拉动窗帘_自定义条件_free_G",
      "props": "窗帘、窗帘杆",
      "actions": "抓取、拉动、移动、松开",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好窗帘，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近窗帘。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触窗帘，先抓取，再拉动，再移动，再松开。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把窗帘处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用窗帘杆配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 110,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "617",
      "scene": "客厅",
      "name": "客厅_按压插头入轻质插座_自定义条件_free_G",
      "props": "插头、轻质插座板",
      "actions": "水平推入、按压、按压测试、轻拉",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好插头，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近插头。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触插头，先水平推入，再按压，再按压测试，再轻拉。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把插头处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用轻质插座板配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 110,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "618",
      "scene": "客厅",
      "name": "客厅_拉出花盆清扫周围_自定义条件_free_G",
      "props": "花盆、刷子",
      "actions": "水平拉拽、来回刷扫、水平推回、调整归正",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好花盆，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近花盆。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触花盆，先水平拉拽，再来回刷扫，再水平推回，再调整归正。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把花盆擦净或清理到任务要求状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用刷子配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 116,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "627",
      "scene": "客厅",
      "name": "客厅_桌面工具套组整理收纳归位_自定义条件_free_G",
      "props": "胶带，锤子，螺丝刀，裁纸刀，卷尺，钳子",
      "actions": "拿取，整理，归位，闭合",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好胶带，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近胶带。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触胶带，先拿取，再整理，再归位，再闭合。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把胶带放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用锤子配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 116,
        "maxWithExtensionSeconds": 146,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "633",
      "scene": "客厅",
      "name": "客厅_手机充电_自定义条件_free_G",
      "props": "手机、充电线",
      "actions": "拿、按压、交接、插入、放回",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好手机，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近手机。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触手机，先拿，再按压，再交接，再插入，再放回。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把手机处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用充电线配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 93,
        "maxWithExtensionSeconds": 117,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "643",
      "scene": "客厅",
      "name": "客厅_玩具铲子铲积木_自定义条件_free_G",
      "props": "沙滩铲玩具、积木玩具、收纳盒",
      "actions": "抓取、按压、推动、对准、倾倒",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好沙滩铲玩具，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近沙滩铲玩具。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触沙滩铲玩具，先抓取，再按压，再推动，再对准，再倾倒。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把沙滩铲玩具放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用积木玩具配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 124,
        "maxWithExtensionSeconds": 154,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "644",
      "scene": "客厅",
      "name": "客厅_推动手串排列整齐_自定义条件_free_G",
      "props": "手串、首饰托盘、桌面",
      "actions": "抓取、推动、对齐、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好手串，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近手串。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触手串，先抓取，再推动，再对齐，再摆放。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把手串处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用首饰托盘配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 119,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "646",
      "scene": "客厅",
      "name": "客厅_按压口红盖闭合_自定义条件_free_G",
      "props": "口红、桌面",
      "actions": "抓取、按压、对准、推动",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好口红，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近口红。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触口红，先抓取，再按压，再对准，再推动。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把口红盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用桌面配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 116,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "658",
      "scene": "客厅",
      "name": "客厅_档案袋封装文件_自定义条件_free_G",
      "props": "档案袋、文件、桌面",
      "actions": "抓取、打开、放入、对齐、按压、推动、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好档案袋，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近档案袋。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触档案袋，先抓取，再打开，再放入，再对齐，再按压，再推动，再摆放。",
          "seconds": 55
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把档案袋放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用文件配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 92,
        "recommendedSeconds": 128,
        "maxWithExtensionSeconds": 158,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "784",
      "scene": "客厅",
      "name": "客厅_茶杯倒水_自定义条件_free_G",
      "props": "茶壶 茶杯 茶盖",
      "actions": "动作：拿，放，倒，盖",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好茶壶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近茶壶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触茶壶，先动作：拿，再放，再倒，再盖。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把茶壶盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用茶杯配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 99,
        "maxWithExtensionSeconds": 129,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "792",
      "scene": "客厅",
      "name": "客厅_推拉归位边几抽屉杂物_自定义条件_free_G",
      "props": "抽屉、充电线、耳机",
      "actions": "拉开, 取出, 理顺, 放入, 按压, 推回",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好抽屉，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近抽屉。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触抽屉，先拉开，再取出，再理顺，再放入，再按压，再推回。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把抽屉放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用充电线配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 103,
        "maxWithExtensionSeconds": 133,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "793",
      "scene": "客厅",
      "name": "客厅_推拉归位收纳盒盖子_自定义条件_free_G",
      "props": "收纳盒、文具用品（笔、尺子、橡皮）",
      "actions": "拉开, 取下, 整理, 推回, 按压",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好收纳盒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近收纳盒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触收纳盒，先拉开，再取下，再整理，再推回，再按压。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把收纳盒放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用文具用品（笔配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 117,
        "maxWithExtensionSeconds": 147,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "798",
      "scene": "客厅",
      "name": "客厅_订书机试钉检查_自定义条件_free_G",
      "props": "订书机、废纸、桌面",
      "actions": "抓取、折叠、对齐、对准、按压、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好订书机，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近订书机。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触订书机，先抓取，再折叠，再对齐，再对准，再按压，再摆放。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把订书机处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用废纸配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 103,
        "maxWithExtensionSeconds": 133,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "799",
      "scene": "客厅",
      "name": "客厅_档案袋双手取件_自定义条件_free_G",
      "props": "档案袋、文件、桌面",
      "actions": "按压、打开、拿起、取出、摆放、对齐",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好档案袋，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近档案袋。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触档案袋，先按压，再打开，再拿起，再取出，再摆放，再对齐。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把档案袋放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用文件配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 121,
        "maxWithExtensionSeconds": 151,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "801",
      "scene": "客厅",
      "name": "客厅_倒削笔机废料_自定义条件_free_G",
      "props": "削笔机，铅笔，垃圾桶",
      "actions": "拿，倒入，归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好削笔机，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近削笔机。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触削笔机，先拿，再倒入，再归位。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把削笔机放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用铅笔配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 92,
        "maxWithExtensionSeconds": 122,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "802",
      "scene": "客厅",
      "name": "客厅_储物柜放置雨伞_自定义条件_free_G",
      "props": "储物柜，雨伞，箱子",
      "actions": "拉开，拿，放，闭合",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好储物柜，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近储物柜。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触储物柜，先拉开，再拿，再放，再闭合。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把储物柜处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用雨伞配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 113,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "954",
      "scene": "客厅",
      "name": "客厅_积木块配对接插_自定义条件_free_G",
      "props": "积木玩具",
      "actions": "拿起、旋转、对齐、按压、检查",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好积木玩具，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近积木玩具。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触积木玩具，先拿起，再旋转，再对齐，再按压，再检查。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把积木玩具处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 90,
        "maxWithExtensionSeconds": 114,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "955",
      "scene": "客厅",
      "name": "客厅_美工刀推出收回_自定义条件_free_G",
      "props": "美工刀",
      "actions": "拿起、推出、对准、模拟、收回",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好美工刀，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近美工刀。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触美工刀，先拿起，再推出，再对准，再模拟，再收回。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把美工刀处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 90,
        "maxWithExtensionSeconds": 114,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "967",
      "scene": "客厅",
      "name": "客厅_弯曲扭扭棒成弹簧_自定义条件_free_G",
      "props": "扭扭棒、铅笔",
      "actions": "拿起、缠绕、抽出、拉平、检查",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好扭扭棒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近扭扭棒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触扭扭棒，先拿起，再缠绕，再抽出，再拉平，再检查。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把扭扭棒处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用铅笔配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 93,
        "maxWithExtensionSeconds": 117,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "970",
      "scene": "客厅",
      "name": "客厅_手机支架折叠收起_自定义条件_free_G",
      "props": "手机支架、抽屉",
      "actions": "拿起、翻转、按压、按压、放回",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好手机支架，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近手机支架。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触手机支架，先拿起，再翻转，再按压，再按压，再放回。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把手机支架放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用抽屉配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 111,
        "maxWithExtensionSeconds": 141,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "978",
      "scene": "客厅",
      "name": "客厅_拼图块按压入框_自定义条件_free_G",
      "props": "拼图块、拼图框",
      "actions": "拿起、对准、放下、按压、检查",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好拼图块，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近拼图块。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触拼图块，先拿起，再对准，再放下，再按压，再检查。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把拼图块处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用拼图框配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 93,
        "maxWithExtensionSeconds": 117,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "981",
      "scene": "客厅",
      "name": "客厅_胶棒旋出使用_自定义条件_free_G",
      "props": "胶棒、纸张",
      "actions": "拿起、旋转、涂抹、旋转、盖好、按压",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好胶棒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近胶棒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触胶棒，先拿起，再旋转，再涂抹，再旋转，再盖好，再按压。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把胶棒盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用纸张配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 100,
        "maxWithExtensionSeconds": 124,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "982",
      "scene": "客厅",
      "name": "客厅_运动鞋除臭_自定义条件_free_G",
      "props": "运动鞋、除臭喷雾、鞋柜",
      "actions": "拿起、对准、按压、取出、放回、压平、放置、对齐",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好运动鞋，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近运动鞋。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触运动鞋，先拿起，再对准，再按压，再取出，再放回，再压平，再放置，再对齐。",
          "seconds": 55
        },
        {
          "step": 4,
          "type": "必做",
          "content": "取出目标物后，关闭或整理运动鞋。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用除臭喷雾配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 92,
        "recommendedSeconds": 117,
        "maxWithExtensionSeconds": 141,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "984",
      "scene": "客厅",
      "name": "客厅_组装简易鞋架隔层_自定义条件_free_G",
      "props": "鞋架支撑柱、底座、隔板",
      "actions": "拾取、插入、对准插入、水平推入、按压、翻转检查",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好鞋架支撑柱，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近鞋架支撑柱。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触鞋架支撑柱，先拾取，再插入，再对准插入，再水平推入，再按压，再翻转检查。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把鞋架支撑柱处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用底座配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 103,
        "maxWithExtensionSeconds": 127,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "986",
      "scene": "客厅",
      "name": "客厅_背包折叠收纳_自定义条件_free_G",
      "props": "背包、收纳箱",
      "actions": "拿起、折叠、折叠、按压、放入",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好背包，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近背包。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触背包，先拿起，再折叠，再折叠，再按压，再放入。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把背包放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用收纳箱配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 111,
        "maxWithExtensionSeconds": 141,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "987",
      "scene": "客厅",
      "name": "客厅_花瓶插花_自定义条件_free_G",
      "props": "花瓶、花",
      "actions": "扶起、拿取、插入",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好花瓶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近花瓶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触花瓶，先扶起，再拿取，再插入。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把花瓶处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用花配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 103,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "992",
      "scene": "客厅",
      "name": "客厅_桌面置物架安装_自定义条件_free_G",
      "props": "轻质塑料桌面置物架组件",
      "actions": "平放、插入、推入、放置、按压、卡紧",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好轻质塑料桌面置物架组件，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近轻质塑料桌面置物架组件。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触轻质塑料桌面置物架组件，先平放，再插入，再推入，再放置，再按压，再卡紧。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把轻质塑料桌面置物架组件处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 97,
        "maxWithExtensionSeconds": 121,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1006",
      "scene": "客厅",
      "name": "客厅_石膏娃娃缝隙漏白补色修饰_自定义条件_free_G",
      "props": "石膏娃娃、颜料",
      "actions": "拿起、对准、舀取、涂抹、静置、摆正、放置",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好石膏娃娃，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近石膏娃娃。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触石膏娃娃，先拿起，再对准，再舀取，再涂抹，再静置，再摆正，再放置。",
          "seconds": 55
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把石膏娃娃放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用颜料配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 92,
        "recommendedSeconds": 107,
        "maxWithExtensionSeconds": 137,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1008",
      "scene": "客厅",
      "name": "客厅_蚊香摆放_自定义条件_free_G",
      "props": "蚊香、蚊香盘、蚊香包装盒",
      "actions": "打开、取出、放入、抓持、移动、推、摆正",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好蚊香，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近蚊香。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触蚊香，先打开，再取出，再放入，再抓持，再移动，再推，再摆正。",
          "seconds": 55
        },
        {
          "step": 4,
          "type": "必做",
          "content": "取出目标物后，关闭或整理蚊香。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用蚊香盘配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 92,
        "recommendedSeconds": 110,
        "maxWithExtensionSeconds": 140,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1010",
      "scene": "客厅",
      "name": "客厅_照片整理装入相册_自定义条件_free_G",
      "props": "相册、照片、装饰相框",
      "actions": "取出、对齐、翻开、拿起、放入、调整、翻合、摆正",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好相册，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近相册。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触相册，先取出，再对齐，再翻开，再拿起，再放入，再调整，再翻合，再摆正。",
          "seconds": 55
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把相册放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用照片配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 92,
        "recommendedSeconds": 117,
        "maxWithExtensionSeconds": 147,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1011",
      "scene": "客厅",
      "name": "客厅_桌面水培植物加水养护_自定义条件_free_G",
      "props": "桌面水培植物、清水、水杯",
      "actions": "托住、抬起、倾斜、倒掉、舀取、倒入、摆正",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好桌面水培植物，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近桌面水培植物。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触桌面水培植物，先托住，再抬起，再倾斜，再倒掉，再舀取，再倒入，再摆正。",
          "seconds": 55
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把桌面水培植物放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用清水配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 92,
        "recommendedSeconds": 120,
        "maxWithExtensionSeconds": 150,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1012",
      "scene": "客厅",
      "name": "客厅_凳子防护套套设整理_自定义条件_free_G",
      "props": "凳子、凳子保护套",
      "actions": "抓取、展开、铺平、对准、套放、拉扯、抚平、调整",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好凳子，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近凳子。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触凳子，先抓取，再展开，再铺平，再对准，再套放，再拉扯，再抚平，再调整。",
          "seconds": 55
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把凳子放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用凳子保护套配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 92,
        "recommendedSeconds": 114,
        "maxWithExtensionSeconds": 144,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1019",
      "scene": "客厅",
      "name": "客厅_花瓶底座归正_自定义条件_free_G",
      "props": "花瓶、花枝",
      "actions": "夹起、平移、拨动、旋转",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好花瓶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近花瓶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触花瓶，先夹起，再平移，再拨动，再旋转。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把花瓶处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用花枝配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 110,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1021",
      "scene": "客厅",
      "name": "客厅_插花泥固定花枝_自定义条件_free_G",
      "props": "插花泥、浅口盘、三枝仿真花枝",
      "actions": "按压、插入",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好插花泥，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近插花泥。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触插花泥，先按压，再插入。",
          "seconds": 18
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把插花泥处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用浅口盘配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 55,
        "recommendedSeconds": 75,
        "maxWithExtensionSeconds": 99,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1022",
      "scene": "客厅",
      "name": "客厅_笔筒底部倒出杂物_自定义条件_free_G",
      "props": "桌面、笔筒、笔数支、废纸",
      "actions": "抽出、拍打、翻转、插回",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好桌面，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近桌面。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触桌面，先抽出，再拍打，再翻转，再插回。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把桌面处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用笔筒配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 92,
        "maxWithExtensionSeconds": 116,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1164",
      "scene": "客厅",
      "name": "客厅_串鞋绳_自定义条件_free_G",
      "props": "运动鞋（未穿鞋带）、鞋带",
      "actions": "夹起、对准、穿入、拉出、交替穿入、拉至等长",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好运动鞋（未穿鞋带），确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近运动鞋（未穿鞋带）。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触运动鞋（未穿鞋带），先夹起，再对准，再穿入，再拉出，再交替穿入，再拉至等长。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把运动鞋（未穿鞋带）处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用鞋带配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 100,
        "maxWithExtensionSeconds": 124,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1190",
      "scene": "客厅",
      "name": "客厅_折叠正方形彩纸_自定义条件_free_G",
      "props": "彩纸、剪刀或美工刀（可选）",
      "actions": "彩纸、剪刀或美工刀（可选）",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好剪刀，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近剪刀。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触剪刀，先彩纸，再剪刀或美工刀（可选）。",
          "seconds": 18
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把剪刀处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用剪刀或美工刀（可选）配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 55,
        "recommendedSeconds": 82,
        "maxWithExtensionSeconds": 106,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含剪刀类道具，规则变更提示此类任务不要优先做；如必须做，需管理员确认安全和质检口径。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1179",
      "scene": "客厅,卧室,书房",
      "name": "客厅_水彩笔收纳_自定义条件_free_G",
      "props": "水彩笔，水彩笔盒",
      "actions": "拿起，盖，放入，拉，推",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好水彩笔，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近水彩笔。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触水彩笔，先拿起，再盖，再放入，再拉，再推。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把水彩笔放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用水彩笔盒配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 93,
        "maxWithExtensionSeconds": 123,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "63",
      "scene": "厨房",
      "name": "厨房_空气炸锅拉出放食材_自定义条件_free_G",
      "props": "空气炸锅、食材袋",
      "actions": "拉、拿、倒入",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好空气炸锅，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近空气炸锅。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触空气炸锅，先拉，再拿，再倒入。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把空气炸锅放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用食材袋配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 119,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "64",
      "scene": "厨房",
      "name": "厨房_电饭煲内胆装米归位_自定义条件_free_G",
      "props": "电饭煲内胆、米罐",
      "actions": "拿、倒入、放入、盖合",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好电饭煲内胆，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近电饭煲内胆。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触电饭煲内胆，先拿，再倒入，再放入，再盖合。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把电饭煲内胆放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用米罐配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 96,
        "maxWithExtensionSeconds": 126,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "67",
      "scene": "厨房",
      "name": "厨房_蔬菜切割分装_自定义条件_free_G",
      "props": "蔬菜、菜刀、砧板、保鲜袋、洗菜盆",
      "actions": "清洗、切割、分类、装入、挤压、封口",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好蔬菜，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近蔬菜。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触蔬菜，先清洗，再切割，再分类，再装入，再挤压，再封口。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把蔬菜盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用菜刀配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 127,
        "maxWithExtensionSeconds": 157,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "72",
      "scene": "厨房",
      "name": "厨房_干货罐盖旋紧排列_自定义条件_free_G",
      "props": "花椒罐、八角罐、干辣椒罐等干货罐",
      "actions": "拿、旋紧、排列",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好花椒罐，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近花椒罐。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触花椒罐，先拿，再旋紧，再排列。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把花椒罐放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用八角罐配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 82,
        "maxWithExtensionSeconds": 112,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "74",
      "scene": "厨房",
      "name": "厨房_酱料瓶挤压归位_自定义条件_free_G",
      "props": "番茄酱、沙拉酱、豆瓣酱等挤压式酱料瓶",
      "actions": "挤压、旋紧、排列、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好番茄酱，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近番茄酱。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触番茄酱，先挤压，再旋紧，再排列，再归位。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把番茄酱放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用沙拉酱配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 119,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "65",
      "scene": "厨房",
      "name": "厨房_儿童餐椅绑带调整_自定义条件_free_G",
      "props": "儿童餐椅、安全带、绑带",
      "actions": "调整、系紧、卡扣、固定",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好儿童餐椅，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近儿童餐椅。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触儿童餐椅，先调整，再系紧，再卡扣，再固定。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把儿童餐椅处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用安全带配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 113,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "66",
      "scene": "厨房",
      "name": "厨房_保鲜膜封口覆盖_自定义条件_free_G",
      "props": "保鲜膜、剪刀、剩菜碗、水果盘",
      "actions": "裁剪、拉伸、覆盖、按压、密封",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好保鲜膜，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近保鲜膜。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触保鲜膜，先裁剪，再拉伸，再覆盖，再按压，再密封。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把保鲜膜盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用剪刀配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 99,
        "maxWithExtensionSeconds": 123,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含剪刀类道具，规则变更提示此类任务不要优先做；如必须做，需管理员确认安全和质检口径。",
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "75",
      "scene": "厨房",
      "name": "厨房_煤气灶台面挤压清洁_自定义条件_free_G",
      "props": "煤气灶、抹布、清洁剂、钢丝球等清洁工具",
      "actions": "拿、挤压、擦拭、清洁、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好煤气灶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近煤气灶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触煤气灶，先拿，再挤压，再擦拭，再清洁，再归位。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把煤气灶放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用抹布配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 117,
        "maxWithExtensionSeconds": 147,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "78",
      "scene": "厨房",
      "name": "厨房_清洁液稀释调配_自定义条件_free_G",
      "props": "浓缩清洁剂、消毒液、量杯、喷壶、清水",
      "actions": "舀取、倒入、稀释、拧紧、摇晃",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好浓缩清洁剂，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近浓缩清洁剂。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触浓缩清洁剂，先舀取，再倒入，再稀释，再拧紧，再摇晃。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把浓缩清洁剂盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用消毒液配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 130,
        "maxWithExtensionSeconds": 160,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "79",
      "scene": "厨房",
      "name": "厨房_调料瓶密封贴标_自定义条件_free_G",
      "props": "调料瓶、散装调料、小勺、标签纸、马克笔",
      "actions": "舀取、倒入、旋紧、贴标、密封",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好调料瓶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近调料瓶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触调料瓶，先舀取，再倒入，再旋紧，再贴标，再密封。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把调料瓶盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用散装调料配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 112,
        "maxWithExtensionSeconds": 142,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "81",
      "scene": "厨房",
      "name": "厨房_酱料袋挤压取用_自定义条件_free_G",
      "props": "袋装酱料、餐碟、锅具、台面",
      "actions": "挤压、拿、放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好袋装酱料，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近袋装酱料。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触袋装酱料，先挤压，再拿，再放。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把袋装酱料处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用餐碟配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 85,
        "maxWithExtensionSeconds": 109,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "84",
      "scene": "厨房",
      "name": "厨房_保鲜盒扣盖密封_自定义条件_free_G",
      "props": "",
      "actions": "拿，翻转，挤压",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好保鲜盒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近保鲜盒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触保鲜盒，先拿，再翻转，再挤压。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把保鲜盒盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 73,
        "maxWithExtensionSeconds": 97,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "80",
      "scene": "厨房",
      "name": "厨房_灶台旋钮擦拭拧动_自定义条件_free_G",
      "props": "煤气灶、抹布",
      "actions": "拿、擦拭、拧动、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好煤气灶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近煤气灶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触煤气灶，先拿，再擦拭，再拧动，再归位。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把煤气灶放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用抹布配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 104,
        "maxWithExtensionSeconds": 134,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "77",
      "scene": "厨房",
      "name": "厨房_锅盖配对盖合_自定义条件_free_G",
      "props": "炒锅、平底锅、锅盖",
      "actions": "拿、配对、盖合",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好炒锅，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近炒锅。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触炒锅，先拿，再配对，再盖合。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把炒锅放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用平底锅配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 82,
        "maxWithExtensionSeconds": 112,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "89",
      "scene": "厨房",
      "name": "厨房_调味料盖旋紧归位_自定义条件_free_G",
      "props": "酱油瓶、醋瓶、油壶等带盖调味瓶",
      "actions": "拿、旋紧、排列",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好酱油瓶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近酱油瓶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触酱油瓶，先拿，再旋紧，再排列。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把酱油瓶放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用醋瓶配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 82,
        "maxWithExtensionSeconds": 112,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "90",
      "scene": "厨房",
      "name": "厨房_电饭煲内胆清洁归位_自定义条件_free_G",
      "props": "电饭煲、纸巾",
      "actions": "拧旋、翻抖、抽取、擦拭、归位、按拨",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好电饭煲，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近电饭煲。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触电饭煲，先拧旋，再翻抖，再抽取，再擦拭，再归位，再按拨。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把电饭煲放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用纸巾配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 118,
        "maxWithExtensionSeconds": 148,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "93",
      "scene": "厨房",
      "name": "厨房_食材分装密封_自定义条件_free_G",
      "props": "密封罐、米面杂粮、漏斗、标签纸、马克笔",
      "actions": "舀取、装入、旋紧、贴标、密封",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好密封罐，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近密封罐。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触密封罐，先舀取，再装入，再旋紧，再贴标，再密封。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把密封罐盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用米面杂粮配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 102,
        "maxWithExtensionSeconds": 132,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "94",
      "scene": "厨房",
      "name": "厨房_碗碟翻转沥干_自定义条件_free_G",
      "props": "陶瓷碗碟、沥水架、水槽台面",
      "actions": "翻转、拿、放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好陶瓷碗碟，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近陶瓷碗碟。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触陶瓷碗碟，先翻转，再拿，再放。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把陶瓷碗碟处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用沥水架配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 82,
        "maxWithExtensionSeconds": 106,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "96",
      "scene": "厨房",
      "name": "厨房_干货袋封口排列_自定义条件_free_G",
      "props": "木耳袋、香菇袋、红枣袋等干货包装",
      "actions": "拿、按压、排列",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好木耳袋，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近木耳袋。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触木耳袋，先拿，再按压，再排列。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把木耳袋放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用香菇袋配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 100,
        "maxWithExtensionSeconds": 130,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "97",
      "scene": "厨房",
      "name": "厨房_冰箱贴归位_自定义条件_free_G",
      "props": "冰箱、冰箱贴",
      "actions": "抓取、翻面、排列、张贴",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好冰箱，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近冰箱。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触冰箱，先抓取，再翻面，再排列，再张贴。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把冰箱放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用冰箱贴配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 116,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "98",
      "scene": "厨房",
      "name": "厨房_锅铲汤勺清洗悬挂_自定义条件_free_G",
      "props": "厨具、绑带、挂钩、收纳架、清洗池",
      "actions": "清洗、悬挂、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好厨具，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近厨具。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触厨具，先清洗，再悬挂，再归位。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把厨具放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用绑带配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 106,
        "maxWithExtensionSeconds": 136,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "99",
      "scene": "厨房",
      "name": "厨房_冰箱食材分类整理归位_自定义条件_free_G",
      "props": "冰箱、保鲜盒、食材、密封袋等",
      "actions": "拿、打开、检查、整理、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好冰箱，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近冰箱。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触冰箱，先拿，再打开，再检查，再整理，再归位。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把冰箱放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用保鲜盒配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 117,
        "maxWithExtensionSeconds": 147,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "100",
      "scene": "厨房",
      "name": "厨房_微波炉开门放入_自定义条件_free_G",
      "props": "微波炉、餐盒",
      "actions": "拉、拿、放入",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好微波炉，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近微波炉。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触微波炉，先拉，再拿，再放入。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把微波炉处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用餐盒配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 103,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "101",
      "scene": "厨房",
      "name": "厨房_包装袋剪开口舀取食材_自定义条件_free_G",
      "props": "",
      "actions": "动作类型：剪 / 切、挖 / 舀",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好碗，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近碗。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触碗，先动作类型：剪，再切，再挖，再舀。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把碗盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 98,
        "maxWithExtensionSeconds": 128,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "91",
      "scene": "厨房",
      "name": "厨房_食材的装盒与盖盖密封_自定义条件_free_G",
      "props": "分装好的食材、塑料保鲜盒",
      "actions": "拿、放、盖、封",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好分装好的食材，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近分装好的食材。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触分装好的食材，先拿，再放，再盖，再封。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把分装好的食材盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用塑料保鲜盒配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 104,
        "maxWithExtensionSeconds": 134,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "95",
      "scene": "厨房",
      "name": "厨房_烤箱使用后清洁归整_自定义条件_free_G",
      "props": "烤箱、烤盘",
      "actions": "推拉、抽取、擦拭、归位、盖合",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好烤箱，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近烤箱。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触烤箱，先推拉，再抽取，再擦拭，再归位，再盖合。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把烤箱放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用烤盘配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 111,
        "maxWithExtensionSeconds": 141,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "104",
      "scene": "厨房",
      "name": "厨房_玉米粒分装_自定义条件_free_G",
      "props": "玉米粒、保鲜盒、",
      "actions": "舀取、盖紧、并列摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好玉米粒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近玉米粒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触玉米粒，先舀取，再盖紧，再并列摆放。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把玉米粒盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用保鲜盒配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 97,
        "maxWithExtensionSeconds": 127,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "105",
      "scene": "厨房",
      "name": "厨房_零食袋剪开舀取分装后绑口_自定义条件_free_G",
      "props": "",
      "actions": "动作类型：剪 / 切、挖 / 舀、系 / 绑",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好目标物，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近目标物。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触目标物，先动作类型：剪，再切，再挖，再舀，再系，再绑。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把目标物盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 112,
        "maxWithExtensionSeconds": 142,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "109",
      "scene": "厨房",
      "name": "厨房_电水壶归位理线_自定义条件_free_G",
      "props": "电水壶",
      "actions": "拿、放入、理顺",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好电水壶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近电水壶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触电水壶，先拿，再放入，再理顺。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把电水壶放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 76,
        "maxWithExtensionSeconds": 106,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "110",
      "scene": "厨房",
      "name": "厨房_调味瓶开盖归位_自定义条件_free_G",
      "props": "酱油瓶、醋瓶、油壶、料酒瓶等带盖调味瓶",
      "actions": "拿、打开、检查、旋紧、排列",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好酱油瓶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近酱油瓶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触酱油瓶，先拿，再打开，再检查，再旋紧，再排列。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把酱油瓶放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用醋瓶配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 99,
        "maxWithExtensionSeconds": 129,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "111",
      "scene": "厨房",
      "name": "厨房_酒水开瓶倾倒与封瓶_自定义条件_free_G",
      "props": "红酒/啤酒/饮料、开瓶器、酒杯、瓶塞/封口盖",
      "actions": "开瓶、倾倒、倒入、密封、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好红酒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近红酒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触红酒，先开瓶，再倾倒，再倒入，再密封，再归位。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把红酒放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用啤酒配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 136,
        "maxWithExtensionSeconds": 166,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "240",
      "scene": "厨房",
      "name": "厨房_调料瓶整理排列归位_自定义条件_free_G",
      "props": "调料瓶、调料架、抹布、洗洁精",
      "actions": "拿、擦拭、整理、排列",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好调料瓶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近调料瓶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触调料瓶，先拿，再擦拭，再整理，再排列。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把调料瓶放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用调料架配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 110,
        "maxWithExtensionSeconds": 140,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "242",
      "scene": "厨房",
      "name": "厨房_微波炉内部清洁擦拭_自定义条件_free_G",
      "props": "微波炉、洗洁精、湿布、垃圾桶",
      "actions": "打开、擦拭、清理、关闭",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好微波炉，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近微波炉。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触微波炉，先打开，再擦拭，再清理，再关闭。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把微波炉放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用洗洁精配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 110,
        "maxWithExtensionSeconds": 140,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "243",
      "scene": "厨房",
      "name": "厨房_烤箱内部清洁归位_自定义条件_free_G",
      "props": "烤箱、清洁剂、湿布、烤网、烤盘、垃圾桶",
      "actions": "打开、拿出、擦拭、清理、归位、关闭",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好烤箱，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近烤箱。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触烤箱，先打开，再拿出，再擦拭，再清理，再归位，再关闭。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把烤箱放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用清洁剂配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 130,
        "maxWithExtensionSeconds": 160,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "244",
      "scene": "厨房",
      "name": "厨房_水槽滤网清理清洗归位_自定义条件_free_G",
      "props": "水槽滤网、水槽、刷子、垃圾桶、清水",
      "actions": "拿、倾倒、冲洗、清理、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好水槽滤网，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近水槽滤网。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触水槽滤网，先拿，再倾倒，再冲洗，再清理，再归位。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把水槽滤网放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用水槽配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 112,
        "maxWithExtensionSeconds": 142,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "246",
      "scene": "厨房",
      "name": "厨房_油烟机表面油污擦拭_自定义条件_free_G",
      "props": "油烟机、去油剂、湿布、滤网、抹布",
      "actions": "擦拭、清理、擦干、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好油烟机，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近油烟机。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触油烟机，先擦拭，再清理，再擦干，再归位。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把油烟机放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用去油剂配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 113,
        "maxWithExtensionSeconds": 143,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "250",
      "scene": "厨房",
      "name": "厨房_厨房开关面板擦拭清洁_自定义条件_free_G",
      "props": "开关面板、插座面板、干抹布、洗洁精、小刷子",
      "actions": "擦拭、清理、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好开关面板，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近开关面板。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触开关面板，先擦拭，再清理，再归位。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把开关面板放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用插座面板配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 106,
        "maxWithExtensionSeconds": 136,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "309",
      "scene": "厨房",
      "name": "厨房_食材分拣收纳_自定义条件_free_G",
      "props": "青菜、保鲜盒、沥水篮",
      "actions": "挑出、捆扎、压实、盖合、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好青菜，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近青菜。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触青菜，先挑出，再捆扎，再压实，再盖合，再摆放。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把青菜放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用保鲜盒配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 96,
        "maxWithExtensionSeconds": 126,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "311",
      "scene": "厨房",
      "name": "厨房_米面桶取用收纳_自定义条件_free_G",
      "props": "米桶、汤勺、米面",
      "actions": "旋转、打开、舀取、盖合",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好米桶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近米桶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触米桶，先旋转，再打开，再舀取，再盖合。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把米桶放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用汤勺配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 119,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "312",
      "scene": "厨房",
      "name": "厨房_面团裁切分装_自定义条件_free_G",
      "props": "面团、案板、保鲜盒",
      "actions": "取出、铺平、裁切、堆叠",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好面团，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近面团。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触面团，先取出，再铺平，再裁切，再堆叠。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把面团放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用案板配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 119,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "375",
      "scene": "厨房",
      "name": "厨房_剩菜打包冷藏_自定义条件_free_G",
      "props": "保鲜盒、剩菜",
      "actions": "盛起、装入、扣紧、放入",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好保鲜盒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近保鲜盒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触保鲜盒，先盛起，再装入，再扣紧，再放入。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把保鲜盒盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用剩菜配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 110,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "400",
      "scene": "厨房",
      "name": "厨房_灌装填充电饭煲_自定义条件_free_G",
      "props": "电饭煲",
      "actions": "倾倒,舀取",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好电饭煲，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近电饭煲。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触电饭煲，先倾倒，再舀取。",
          "seconds": 18
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把电饭煲放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 55,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 109,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "401",
      "scene": "厨房",
      "name": "厨房_灌装填充保温盒_自定义条件_free_G",
      "props": "保温盒",
      "actions": "倾倒,舀取",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好保温盒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近保温盒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触保温盒，先倾倒，再舀取。",
          "seconds": 18
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把保温盒放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 55,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 109,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "402",
      "scene": "厨房",
      "name": "厨房_倾倒转移保温杯_自定义条件_free_G",
      "props": "保温杯，碗",
      "actions": "旋扭，倾倒",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好保温杯，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近保温杯。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触保温杯，先旋扭，再倾倒。",
          "seconds": 18
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把保温杯放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用碗配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 55,
        "recommendedSeconds": 82,
        "maxWithExtensionSeconds": 112,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "403",
      "scene": "厨房",
      "name": "厨房_舀取盛取电饭煲_自定义条件_free_G",
      "props": "电饭煲",
      "actions": "舀取",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好电饭煲，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近电饭煲。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触电饭煲，先舀取。",
          "seconds": 18
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把电饭煲放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 55,
        "recommendedSeconds": 63,
        "maxWithExtensionSeconds": 93,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "407",
      "scene": "厨房",
      "name": "厨房_关闭封存保鲜盒_自定义条件_free_G",
      "props": "保鲜盒",
      "actions": "推,关闭,盖合,密封",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好保鲜盒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近保鲜盒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触保鲜盒，先推，再关闭，再盖合，再密封。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把保鲜盒盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 83,
        "maxWithExtensionSeconds": 107,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "410",
      "scene": "厨房",
      "name": "厨房_倾倒转移炒锅_自定义条件_free_G",
      "props": "炒锅,菜盘",
      "actions": "倾倒,放置",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好炒锅，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近炒锅。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触炒锅，先倾倒，再放置。",
          "seconds": 18
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把炒锅放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用菜盘配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 55,
        "recommendedSeconds": 82,
        "maxWithExtensionSeconds": 112,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "411",
      "scene": "厨房",
      "name": "厨房_分装计量蔬菜_自定义条件_free_G",
      "props": "小西红柿,纸箱,碗,分装袋",
      "actions": "舀取,倾倒",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好小西红柿，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近小西红柿。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触小西红柿，先舀取，再倾倒。",
          "seconds": 18
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把小西红柿放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用纸箱配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 55,
        "recommendedSeconds": 106,
        "maxWithExtensionSeconds": 136,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "412",
      "scene": "厨房",
      "name": "厨房_包裹封存蔬菜_自定义条件_free_G",
      "props": "塑料袋,细绳,青菜",
      "actions": "折叠,捆扎,密封",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好塑料袋，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近塑料袋。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触塑料袋，先折叠，再捆扎，再密封。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把塑料袋盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用细绳配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 82,
        "maxWithExtensionSeconds": 106,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "417",
      "scene": "厨房",
      "name": "厨房_挤压出料食用油瓶_自定义条件_free_G",
      "props": "食用油瓶",
      "actions": "抓住、挤压、倒出、摆正",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好食用油瓶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近食用油瓶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触食用油瓶，先抓住，再挤压，再倒出，再摆正。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把食用油瓶处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 83,
        "maxWithExtensionSeconds": 113,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "422",
      "scene": "厨房",
      "name": "厨房_拉出取物保鲜盒_自定义条件_free_G",
      "props": "保鲜盒",
      "actions": "抽拉、托举、移动、放置",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好保鲜盒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近保鲜盒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触保鲜盒，先抽拉，再托举，再移动，再放置。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "取出目标物后，关闭或整理保鲜盒。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 83,
        "maxWithExtensionSeconds": 107,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "423",
      "scene": "厨房",
      "name": "厨房_倾倒转移牛奶盒_自定义条件_free_G",
      "props": "牛奶盒,玻璃杯",
      "actions": "倾倒,折叠,放置",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好牛奶盒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近牛奶盒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触牛奶盒，先倾倒，再折叠，再放置。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把牛奶盒放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用玻璃杯配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 119,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "424",
      "scene": "厨房",
      "name": "厨房_摇晃混合食用油瓶_自定义条件_free_G",
      "props": "食用油瓶",
      "actions": "动作：摇晃,擦拭,归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好食用油瓶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近食用油瓶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触食用油瓶，先动作：摇晃，再擦拭，再归位。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把食用油瓶放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 94,
        "maxWithExtensionSeconds": 124,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "425",
      "scene": "厨房",
      "name": "厨房_安装复位咖啡胶囊_自定义条件_free_G",
      "props": "咖啡机,咖啡胶囊",
      "actions": "插入,对齐,旋紧,按压",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好咖啡机，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近咖啡机。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触咖啡机，先插入，再对齐，再旋紧，再按压。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把咖啡机盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用咖啡胶囊配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 112,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "432",
      "scene": "厨房",
      "name": "厨房_餐厨垃圾处理与清洁_自定义条件_free_G",
      "props": "垃圾桶、垃圾袋",
      "actions": "拾取、密封、放置、安装",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好垃圾桶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近垃圾桶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触垃圾桶，先拾取，再密封，再放置，再安装。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把垃圾桶盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用垃圾袋配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 104,
        "maxWithExtensionSeconds": 134,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "435",
      "scene": "厨房",
      "name": "厨房_米面拆封收纳_自定义条件_free_G",
      "props": "袋装小米、剪刀、保鲜盒",
      "actions": "倾倒、摆放、裁剪、关闭",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好袋装小米，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近袋装小米。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触袋装小米，先倾倒，再摆放，再裁剪，再关闭。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把袋装小米放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用剪刀配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 99,
        "maxWithExtensionSeconds": 129,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含剪刀类道具，规则变更提示此类任务不要优先做；如必须做，需管理员确认安全和质检口径。",
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "465",
      "scene": "厨房",
      "name": "厨房_蔬菜分装_自定义条件_free_G",
      "props": "蔬菜、保鲜袋",
      "actions": "拿、抖落、抓取、放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好蔬菜，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近蔬菜。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触蔬菜，先拿，再抖落，再抓取，再放。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把蔬菜放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用保鲜袋配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 104,
        "maxWithExtensionSeconds": 134,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "468",
      "scene": "厨房",
      "name": "厨房_刀叉分类摆放_自定义条件_free_G",
      "props": "刀叉、软布、收纳架",
      "actions": "拿、擦拭、插入",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好刀叉，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近刀叉。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触刀叉，先拿，再擦拭，再插入。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把刀叉放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用软布配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 100,
        "maxWithExtensionSeconds": 130,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "469",
      "scene": "厨房",
      "name": "厨房_面粉过筛装碗_自定义条件_free_G",
      "props": "面粉、筛子、碗、包装袋、刮刀",
      "actions": "取出,过筛,倾倒,刮",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好面粉，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近面粉。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触面粉，先取出，再过筛，再倾倒，再刮。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把面粉放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用筛子配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 105,
        "maxWithExtensionSeconds": 135,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "470",
      "scene": "厨房",
      "name": "厨房_模具刷油铺纸_自定义条件_free_G",
      "props": "烘焙模具、橱柜、油刷、油纸、台面",
      "actions": "取出,刷涂,铺展,按压",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好烘焙模具，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近烘焙模具。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触烘焙模具，先取出，再刷涂，再铺展，再按压。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "取出目标物后，关闭或整理烘焙模具。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用橱柜配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 95,
        "maxWithExtensionSeconds": 119,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "471",
      "scene": "厨房",
      "name": "厨房_饼干压模成型_自定义条件_free_G",
      "props": "面团、保鲜袋、擀面杖、模具、烤盘",
      "actions": "取出,擀压,压模,摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好面团，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近面团。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触面团，先取出，再擀压，再压模，再摆放。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "取出目标物后，关闭或整理面团。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用保鲜袋配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 95,
        "maxWithExtensionSeconds": 125,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "472",
      "scene": "厨房",
      "name": "厨房_面糊搅拌打发_自定义条件_free_G",
      "props": "食材、碗、打蛋器、裱花袋、刮刀",
      "actions": "倾倒,搅拌,打发,装入,扭紧",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好食材，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近食材。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触食材，先倾倒，再搅拌，再打发，再装入，再扭紧。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把食材放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用碗配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 112,
        "maxWithExtensionSeconds": 142,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "473",
      "scene": "厨房",
      "name": "厨房_裱花挤花装饰_自定义条件_free_G",
      "props": "奶油、裱花袋、裱花嘴、转盘、蛋糕",
      "actions": "装入,旋紧,挤压,摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好奶油，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近奶油。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触奶油，先装入，再旋紧，再挤压，再摆放。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把奶油盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用裱花袋配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 95,
        "maxWithExtensionSeconds": 125,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "474",
      "scene": "厨房",
      "name": "厨房_酥皮折叠擀压_自定义条件_free_G",
      "props": "面饼、擀面杖、菜刀、案板、烤盘",
      "actions": "折叠,擀压,切割,摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好面饼，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近面饼。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触面饼，先折叠，再擀压，再切割，再摆放。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把面饼处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用擀面杖配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 95,
        "maxWithExtensionSeconds": 125,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "475",
      "scene": "厨房",
      "name": "厨房_调味汁调配搅拌_自定义条件_free_G",
      "props": "调料、碗、勺子、瓶子、漏斗",
      "actions": "倾倒,搅拌,装入,旋紧",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好调料，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近调料。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触调料，先倾倒，再搅拌，再装入，再旋紧。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把调料盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用碗配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 105,
        "maxWithExtensionSeconds": 135,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "476",
      "scene": "厨房",
      "name": "厨房_酱料混合搅拌_自定义条件_free_G",
      "props": "酱料、碗、勺子、瓶子、漏斗",
      "actions": "倾倒,搅拌,装入,旋紧",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好酱料，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近酱料。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触酱料，先倾倒，再搅拌，再装入，再旋紧。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把酱料盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用碗配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 105,
        "maxWithExtensionSeconds": 135,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "477",
      "scene": "厨房",
      "name": "厨房_蒜泥捣制装碗_自定义条件_free_G",
      "props": "大蒜、蒜臼、碗、台面、勺子",
      "actions": "剥皮,捣制,装入,摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好大蒜，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近大蒜。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触大蒜，先剥皮，再捣制，再装入，再摆放。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把大蒜处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用蒜臼配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 95,
        "maxWithExtensionSeconds": 125,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "478",
      "scene": "厨房",
      "name": "厨房_辣椒油熬制装瓶_自定义条件_free_G",
      "props": "辣椒面、碗、油、勺子、瓶子",
      "actions": "放入,浇入,搅拌,装入",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好辣椒面，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近辣椒面。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触辣椒面，先放入，再浇入，再搅拌，再装入。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把辣椒面处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用碗配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 95,
        "maxWithExtensionSeconds": 119,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "480",
      "scene": "厨房",
      "name": "厨房_空气炸锅设置烤制_自定义条件_free_G",
      "props": "食材、炸篮、空气炸锅",
      "actions": "摆放,推入,旋转",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好食材，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近食材。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触食材，先摆放，再推入，再旋转。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把食材处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用炸篮配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 82,
        "maxWithExtensionSeconds": 112,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "481",
      "scene": "厨房",
      "name": "厨房_红豆漏斗装瓶_自定义条件_free_G",
      "props": "红豆、漏斗、储物罐",
      "actions": "插入,倾倒,摇晃,旋紧",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好红豆，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近红豆。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触红豆，先插入，再倾倒，再摇晃，再旋紧。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把红豆盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用漏斗配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 99,
        "maxWithExtensionSeconds": 129,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "482",
      "scene": "厨房",
      "name": "厨房_小米漏斗装瓶_自定义条件_free_G",
      "props": "袋装小米、漏斗、储物瓶、剪刀",
      "actions": "剪开,倾倒,振动,旋紧",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好袋装小米，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近袋装小米。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触袋装小米，先剪开，再倾倒，再振动，再旋紧。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把袋装小米盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用漏斗配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 102,
        "maxWithExtensionSeconds": 132,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含剪刀类道具，规则变更提示此类任务不要优先做；如必须做，需管理员确认安全和质检口径。",
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "483",
      "scene": "厨房",
      "name": "厨房_黑米漏斗装罐_自定义条件_free_G",
      "props": "黑米、漏斗、储物罐、勺子、刮刀",
      "actions": "对准,舀取,倾倒,刮平,盖合",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好黑米，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近黑米。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触黑米，先对准，再舀取，再倾倒，再刮平，再盖合。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把黑米盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用漏斗配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 112,
        "maxWithExtensionSeconds": 142,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "484",
      "scene": "厨房",
      "name": "厨房_燕麦片漏斗装瓶_自定义条件_free_G",
      "props": "燕麦片、漏斗、玻璃瓶、碗、压棒",
      "actions": "插入,倾倒,按压,旋紧",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好燕麦片，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近燕麦片。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触燕麦片，先插入，再倾倒，再按压，再旋紧。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把燕麦片盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用漏斗配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 105,
        "maxWithExtensionSeconds": 135,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "485",
      "scene": "厨房",
      "name": "厨房_薏米漏斗装罐_自定义条件_free_G",
      "props": "薏米、漏斗、储物罐、勺子、碗",
      "actions": "对准,舀取,倾倒,摇晃,盖合",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好薏米，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近薏米。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触薏米，先对准，再舀取，再倾倒，再摇晃，再盖合。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把薏米盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用漏斗配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 112,
        "maxWithExtensionSeconds": 142,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "486",
      "scene": "厨房",
      "name": "厨房_糯米漏斗装瓶_自定义条件_free_G",
      "props": "糯米、漏斗、玻璃瓶、碗",
      "actions": "插入,倾倒,拍击,旋紧",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好糯米，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近糯米。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触糯米，先插入，再倾倒，再拍击，再旋紧。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把糯米盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用漏斗配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 102,
        "maxWithExtensionSeconds": 132,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "487",
      "scene": "厨房",
      "name": "厨房_汤品分装密封_自定义条件_free_G",
      "props": "汤、保鲜袋、漏斗、碗",
      "actions": "插入,舀取,倾倒,排气,密封",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好汤，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近汤。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触汤，先插入，再舀取，再倾倒，再排气，再密封。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把汤盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用保鲜袋配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 109,
        "maxWithExtensionSeconds": 139,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "488",
      "scene": "厨房",
      "name": "厨房_干货装罐密封_自定义条件_free_G",
      "props": "干货、罐子、勺子、标签、台面",
      "actions": "装入,盖合,粘贴,摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好干货，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近干货。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触干货，先装入，再盖合，再粘贴，再摆放。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把干货盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用罐子配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 95,
        "maxWithExtensionSeconds": 125,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "489",
      "scene": "厨房",
      "name": "厨房_茶叶装罐密封_自定义条件_free_G",
      "props": "茶叶、茶罐、勺子、茶盘、台面",
      "actions": "装入,盖合,摆放,对齐",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好茶叶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近茶叶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触茶叶，先装入，再盖合，再摆放，再对齐。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把茶叶放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用茶罐配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 113,
        "maxWithExtensionSeconds": 143,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "490",
      "scene": "厨房",
      "name": "厨房_零食分装密封_自定义条件_free_G",
      "props": "零食、小袋、封口机、台面、手",
      "actions": "分装,封口,排列,摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好零食，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近零食。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触零食，先分装，再封口，再排列，再摆放。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把零食盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用小袋配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 113,
        "maxWithExtensionSeconds": 143,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "491",
      "scene": "厨房",
      "name": "厨房_垃圾袋套入桶中_自定义条件_free_G",
      "props": "垃圾袋、垃圾桶、手、台面、地面",
      "actions": "展开,套穿,按压,整理",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好垃圾袋，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近垃圾袋。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触垃圾袋，先展开，再套穿，再按压，再整理。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把垃圾袋放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用垃圾桶配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 113,
        "maxWithExtensionSeconds": 143,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "492",
      "scene": "厨房",
      "name": "厨房_保鲜膜包裹食物_自定义条件_free_G",
      "props": "保鲜膜、盒子、食物、盘子、手",
      "actions": "拉出,覆盖,按压,撕断",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好保鲜膜，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近保鲜膜。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触保鲜膜，先拉出，再覆盖，再按压，再撕断。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把保鲜膜盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用盒子配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 95,
        "maxWithExtensionSeconds": 119,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "493",
      "scene": "厨房",
      "name": "厨房_锡纸折叠包裹_自定义条件_free_G",
      "props": "锡纸、卷、食物、烤盘、剪刀",
      "actions": "拉出,切割,折叠,捏紧",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好锡纸，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近锡纸。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触锡纸，先拉出，再切割，再折叠，再捏紧。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把锡纸处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用卷配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 95,
        "maxWithExtensionSeconds": 119,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含剪刀类道具，规则变更提示此类任务不要优先做；如必须做，需管理员确认安全和质检口径。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "494",
      "scene": "厨房",
      "name": "厨房_蒸笼布铺展摆放_自定义条件_free_G",
      "props": "蒸笼布、蒸格、蒸锅、手、台面",
      "actions": "抖开,铺展,对齐,整理",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好蒸笼布，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近蒸笼布。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触蒸笼布，先抖开，再铺展，再对齐，再整理。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把蒸笼布放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用蒸格配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 113,
        "maxWithExtensionSeconds": 143,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "497",
      "scene": "厨房",
      "name": "厨房_土豆去皮切丝_自定义条件_free_G",
      "props": "土豆、削皮器、切丝器、水盆",
      "actions": "翻转,削皮,摩擦,放入",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好土豆，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近土豆。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触土豆，先翻转，再削皮，再摩擦，再放入。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把土豆处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用削皮器配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 92,
        "maxWithExtensionSeconds": 116,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "499",
      "scene": "厨房",
      "name": "厨房_调料壶补充_自定义条件_free_G",
      "props": "调料、调料壶、厨房纸巾",
      "actions": "拧开、盖紧、倒入、擦拭",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好调料，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近调料。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触调料，先拧开，再盖紧，再倒入，再擦拭。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把调料放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用调料壶配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 117,
        "maxWithExtensionSeconds": 147,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "510",
      "scene": "厨房",
      "name": "厨房_把面粉倒入碗中_自定义条件_free_G",
      "props": "一袋面粉、碗",
      "actions": "动作：夹取，倾倒，放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好一袋面粉，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近一袋面粉。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触一袋面粉，先动作：夹取，再倾倒，再放。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把一袋面粉放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用碗配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 119,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "514",
      "scene": "厨房",
      "name": "厨房_加热食物_自定义条件_free_G",
      "props": "微波炉，食物",
      "actions": "拿，放，扭",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好微波炉，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近微波炉。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触微波炉，先拿，再放，再扭。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "取出目标物后，关闭或整理微波炉。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用食物配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 103,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "516",
      "scene": "厨房",
      "name": "厨房_分装调料_自定义条件_free_G",
      "props": "大包装调料，调料盒",
      "actions": "倾倒，夹",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好大包装调料，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近大包装调料。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触大包装调料，先倾倒，再夹。",
          "seconds": 18
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把大包装调料放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用调料盒配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 55,
        "recommendedSeconds": 82,
        "maxWithExtensionSeconds": 112,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "520",
      "scene": "厨房",
      "name": "厨房_冲泡麦片与搅拌_自定义条件_free_G",
      "props": "麦片,碗,勺子",
      "actions": "舀取,倾倒,搅拌",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好麦片，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近麦片。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触麦片，先舀取，再倾倒，再搅拌。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把麦片放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用碗配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 92,
        "maxWithExtensionSeconds": 122,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "530",
      "scene": "厨房",
      "name": "厨房_铝箔餐盒封盖打包_自定义条件_free_G",
      "props": "一次性铝箔餐盒、配套塑料盖",
      "actions": "盛放、对齐、按压封合、堆叠",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好一次性铝箔餐盒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近一次性铝箔餐盒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触一次性铝箔餐盒，先盛放，再对齐，再按压封合，再堆叠。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把一次性铝箔餐盒盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用配套塑料盖配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 110,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "575",
      "scene": "厨房",
      "name": "厨房_推拉厨房消毒柜，将碗放入_自定义条件_free_G",
      "props": "消毒柜，碗",
      "actions": "拿，放，推，拉",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好消毒柜，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近消毒柜。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触消毒柜，先拿，再放，再推，再拉。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把消毒柜放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用碗配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 104,
        "maxWithExtensionSeconds": 134,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "602",
      "scene": "厨房",
      "name": "厨房_灌装油壶_自定义条件_free_G",
      "props": "漏斗、油壶、食用油桶、抹布",
      "actions": "插入、倾斜灌入、扶正、环绕擦拭、旋紧",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好漏斗，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近漏斗。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触漏斗，先插入，再倾斜灌入，再扶正，再环绕擦拭，再旋紧。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把漏斗盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用油壶配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 117,
        "maxWithExtensionSeconds": 147,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "603",
      "scene": "厨房",
      "name": "厨房_安装锅盖提手_自定义条件_free_G",
      "props": "锅盖、提手、螺母、垫片",
      "actions": "套入、旋拧锁紧、按压贴合、翻转放置",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好锅盖，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近锅盖。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触锅盖，先套入，再旋拧锁紧，再按压贴合，再翻转放置。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把锅盖盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用提手配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 92,
        "maxWithExtensionSeconds": 118,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "604",
      "scene": "厨房",
      "name": "厨房_装填腌渍罐_自定义条件_free_G",
      "props": "黄瓜条、玻璃罐、腌汁",
      "actions": "推塞、倾斜倒入、旋紧、摇晃、贴标",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好黄瓜条，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近黄瓜条。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触黄瓜条，先推塞，再倾斜倒入，再旋紧，再摇晃，再贴标。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把黄瓜条盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用玻璃罐配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 106,
        "maxWithExtensionSeconds": 136,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "605",
      "scene": "厨房",
      "name": "厨房_推抽屉关上_自定义条件_free_G",
      "props": "抽屉",
      "actions": "向前推动、按压、轻拉",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好抽屉，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近抽屉。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触抽屉，先向前推动，再按压，再轻拉。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把抽屉处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 76,
        "maxWithExtensionSeconds": 100,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "607",
      "scene": "厨房",
      "name": "厨房_收纳刀具_自定义条件_free_G",
      "props": "刀具、刀架",
      "actions": "抓取、对准、插入、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好刀具，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近刀具。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触刀具，先抓取，再对准，再插入，再摆放。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把刀具放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用刀架配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 116,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "608",
      "scene": "厨房",
      "name": "厨房_拉出轻质沥水架_自定义条件_free_G",
      "props": "塑料沥水架、水槽",
      "actions": "拉拽、按压、轻推",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好塑料沥水架，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近塑料沥水架。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触塑料沥水架，先拉拽，再按压，再轻推。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把塑料沥水架处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用水槽配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 97,
        "maxWithExtensionSeconds": 121,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "609",
      "scene": "厨房",
      "name": "厨房_传递轻质调料瓶_自定义条件_free_G",
      "props": "塑料调料瓶、灶台",
      "actions": "水平推送、旋转、按压",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好塑料调料瓶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近塑料调料瓶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触塑料调料瓶，先水平推送，再旋转，再按压。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把塑料调料瓶盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用灶台配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 105,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "637",
      "scene": "厨房",
      "name": "厨房_推动调料盒归位_自定义条件_free_G",
      "props": "塑料调料盒、袋装盐、袋装糖、抹布",
      "actions": "拿、塞进、折叠、推动、擦拭、盖合",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好塑料调料盒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近塑料调料盒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触塑料调料盒，先拿，再塞进，再折叠，再推动，再擦拭，再盖合。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把塑料调料盒放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用袋装盐配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 124,
        "maxWithExtensionSeconds": 154,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "638",
      "scene": "厨房",
      "name": "厨房_推动食材盒归位_自定义条件_free_G",
      "props": "塑料食材盒、干木耳、标签贴",
      "actions": "拿、打开、放、盖合、推、按压",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好塑料食材盒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近塑料食材盒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触塑料食材盒，先拿，再打开，再放，再盖合，再推，再按压。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把塑料食材盒放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用干木耳配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 103,
        "maxWithExtensionSeconds": 133,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "645",
      "scene": "厨房",
      "name": "厨房_按压调料盒取调料_自定义条件_free_G",
      "props": "调料盒、调料碗",
      "actions": "抓取、按压、推动、对准",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好调料盒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近调料盒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触调料盒，先抓取，再按压，再推动，再对准。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把调料盒盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用调料碗配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 110,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "647",
      "scene": "厨房",
      "name": "厨房_递送刷碗布挂晾_自定义条件_free_G",
      "props": "刷碗布、挂钩",
      "actions": "抓取、递送、悬挂、拉动",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好刷碗布，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近刷碗布。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触刷碗布，先抓取，再递送，再悬挂，再拉动。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把刷碗布处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用挂钩配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 110,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "651",
      "scene": "厨房",
      "name": "厨房_拖拉调料抽屉取物_自定义条件_free_G",
      "props": "调料盒、盐、辣椒花椒、抽屉",
      "actions": "抓取、拉动、推动、递送",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好调料盒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近调料盒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触调料盒，先抓取，再拉动，再推动，再递送。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把调料盒放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用盐配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 110,
        "maxWithExtensionSeconds": 140,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "653",
      "scene": "厨房",
      "name": "厨房_带盖零食罐分装收纳_自定义条件_free_G",
      "props": "膨化零食，零食罐，抹布",
      "actions": "分装、擦除、扣盖、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好膨化零食，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近膨化零食。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触膨化零食，先分装，再擦除，再扣盖，再摆放。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把膨化零食放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用零食罐配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 107,
        "maxWithExtensionSeconds": 137,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "657",
      "scene": "厨房",
      "name": "厨房_杂粮等分装袋整理_自定义条件_free_G",
      "props": "红枣、红豆、玉米粒,食材袋,储物架",
      "actions": "装填、扎紧、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好红枣，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近红枣。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触红枣，先装填，再扎紧，再摆放。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把红枣放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用红豆配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 88,
        "maxWithExtensionSeconds": 118,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "661",
      "scene": "厨房",
      "name": "厨房_打包盒堆叠收纳_自定义条件_free_G",
      "props": "打包盒、台面",
      "actions": "抓取、对准、堆叠、推动、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好打包盒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近打包盒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触打包盒，先抓取，再对准，再堆叠，再推动，再摆放。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把打包盒放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用台面配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 111,
        "maxWithExtensionSeconds": 141,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "662",
      "scene": "厨房",
      "name": "厨房_纸杯套叠收纳_自定义条件_free_G",
      "props": "一次性纸杯、台面",
      "actions": "抓取、对准、按压、堆叠、推动",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好一次性纸杯，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近一次性纸杯。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触一次性纸杯，先抓取，再对准，再按压，再堆叠，再推动。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把一次性纸杯放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用台面配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 111,
        "maxWithExtensionSeconds": 141,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "663",
      "scene": "厨房",
      "name": "厨房_调料瓶标签对齐_自定义条件_free_G",
      "props": "调料、灶台",
      "actions": "抓取、旋转、对齐、推动、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好调料，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近调料。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触调料，先抓取，再旋转，再对齐，再推动，再摆放。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把调料处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用灶台配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 93,
        "maxWithExtensionSeconds": 123,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "785",
      "scene": "厨房",
      "name": "厨房_黑芝麻分装保存_自定义条件_free_G",
      "props": "黑芝麻、保鲜袋、小勺子、台面",
      "actions": "抓取、舀取、递送、按压、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好黑芝麻，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近黑芝麻。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触黑芝麻，先抓取，再舀取，再递送，再按压，再摆放。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把黑芝麻盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用保鲜袋配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 117,
        "maxWithExtensionSeconds": 147,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "788",
      "scene": "厨房",
      "name": "厨房_刮板推拉清洁灶台_自定义条件_free_G",
      "props": "灶台刮板、水槽",
      "actions": "推拉, 拿起, 递送",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好灶台刮板，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近灶台刮板。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触灶台刮板，先推拉，再拿起，再递送。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把灶台刮板放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用水槽配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 109,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "789",
      "scene": "厨房",
      "name": "厨房_递送归位保鲜盒叠放_自定义条件_free_G",
      "props": "保鲜盒（含盖）",
      "actions": "拿起, 递送, 接住, 扣合, 推入",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好保鲜盒（含盖），确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近保鲜盒（含盖）。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触保鲜盒（含盖），先拿起，再递送，再接住，再扣合，再推入。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把保鲜盒（含盖）放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 90,
        "maxWithExtensionSeconds": 120,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "790",
      "scene": "厨房",
      "name": "厨房_递送归位塑料量杯_自定义条件_free_G",
      "props": "3个不同容量的塑料量杯",
      "actions": "拿起, 递送, 接住, 放入, 按压",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好3个不同容量的塑料量杯，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近3个不同容量的塑料量杯。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触3个不同容量的塑料量杯，先拿起，再递送，再接住，再放入，再按压。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把3个不同容量的塑料量杯放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 90,
        "maxWithExtensionSeconds": 120,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "791",
      "scene": "厨房",
      "name": "厨房_推拉归位水槽边置物架_自定义条件_free_G",
      "props": "塑料置物架、百洁布、洗碗刷、干抹布",
      "actions": "拉出, 扶正, 摆放, 折叠, 推回, 按压",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好塑料置物架，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近塑料置物架。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触塑料置物架，先拉出，再扶正，再摆放，再折叠，再推回，再按压。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把塑料置物架放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用百洁布配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 106,
        "maxWithExtensionSeconds": 136,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "800",
      "scene": "厨房",
      "name": "厨房_保鲜袋分装麦片_自定义条件_free_G",
      "props": "保鲜袋、麦片、收纳箱、台面",
      "actions": "抓取、拉动、取出、摆放、打开、放入、对准、按压、推动",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好保鲜袋，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近保鲜袋。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触保鲜袋，先抓取，再拉动，再取出，再摆放，再打开，再放入，再对准，再按压。",
          "seconds": 55
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把保鲜袋放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用麦片配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 92,
        "recommendedSeconds": 145,
        "maxWithExtensionSeconds": 175,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "803",
      "scene": "厨房",
      "name": "厨房_烧水壶烧制热水_自定义条件_free_G",
      "props": "烧水壶",
      "actions": "拿，放置，插，按",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好烧水壶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近烧水壶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触烧水壶，先拿，再放置，再插，再按。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "取出目标物后，关闭或整理烧水壶。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 83,
        "maxWithExtensionSeconds": 107,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "953",
      "scene": "厨房",
      "name": "厨房_水槽滤网按压卡入_自定义条件_free_G",
      "props": "水槽滤网",
      "actions": "拿起、对准、放入、按压、轻提",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好水槽滤网，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近水槽滤网。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触水槽滤网，先拿起，再对准，再放入，再按压，再轻提。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把水槽滤网处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 90,
        "maxWithExtensionSeconds": 114,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "956",
      "scene": "厨房",
      "name": "厨房_递送大米入保鲜袋_自定义条件_free_G",
      "props": "大米、保鲜袋、勺子、台面",
      "actions": "撑开、舀取、倒入、捏住、按压、检查",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好大米，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近大米。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触大米，先撑开，再舀取，再倒入，再捏住，再按压，再检查。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把大米盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用保鲜袋配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 134,
        "maxWithExtensionSeconds": 164,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "957",
      "scene": "厨房",
      "name": "厨房_大漏勺捞取食材_自定义条件_free_G",
      "props": "大漏勺、锅、食材、盘",
      "actions": "拿起、伸入、推动、提起、摇晃、倒入",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好大漏勺，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近大漏勺。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触大漏勺，先拿起，再伸入，再推动，再提起，再摇晃，再倒入。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把大漏勺放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用锅配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 116,
        "maxWithExtensionSeconds": 146,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "960",
      "scene": "厨房",
      "name": "厨房_辣椒罐左右手传递倒料_自定义条件_free_G",
      "props": "辣椒罐、调料碗",
      "actions": "拿起、拧开、递送、扶住、拧紧",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好辣椒罐，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近辣椒罐。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触辣椒罐，先拿起，再拧开，再递送，再扶住，再拧紧。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把辣椒罐盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用调料碗配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 93,
        "maxWithExtensionSeconds": 119,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "964",
      "scene": "厨房",
      "name": "厨房_锅铲翻动训练_自定义条件_free_G",
      "props": "锅铲、模拟物",
      "actions": "拿起、伸入、贴紧、铲起、按压",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好锅铲，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近锅铲。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触锅铲，先拿起，再伸入，再贴紧，再铲起，再按压。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把锅铲处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用模拟物配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 93,
        "maxWithExtensionSeconds": 117,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "965",
      "scene": "厨房",
      "name": "厨房_麦片黑芝麻拌匀_自定义条件_free_G",
      "props": "麦片、黑芝麻、保鲜袋、勺子、调料碗",
      "actions": "打开、倒入、剪开、撒入、翻拌、盖好",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好麦片，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近麦片。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触麦片，先打开，再倒入，再剪开，再撒入，再翻拌，再盖好。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把麦片盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用黑芝麻配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 119,
        "maxWithExtensionSeconds": 149,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "968",
      "scene": "厨房",
      "name": "厨房_过滤分离红豆_自定义条件_free_G",
      "props": "泡水的红豆、碗盆勺、保鲜盒",
      "actions": "舀取, 倒入, 按压,盖合",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好泡水的红豆，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近泡水的红豆。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触泡水的红豆，先舀取，再倒入，再按压，再盖合。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把泡水的红豆盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用碗盆勺配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 99,
        "maxWithExtensionSeconds": 129,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "979",
      "scene": "厨房",
      "name": "厨房_蒸架叠放对齐_自定义条件_free_G",
      "props": "蒸架、橱柜",
      "actions": "拿起、对准、套入、旋转、推入",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好蒸架，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近蒸架。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触蒸架，先拿起，再对准，再套入，再旋转，再推入。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把蒸架放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用橱柜配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 111,
        "maxWithExtensionSeconds": 141,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "980",
      "scene": "厨房",
      "name": "厨房_打蛋器挂入架_自定义条件_free_G",
      "props": "打蛋器、收纳架",
      "actions": "拿起、对准、推入、调整",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好打蛋器，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近打蛋器。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触打蛋器，先拿起，再对准，再推入，再调整。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把打蛋器放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用收纳架配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 104,
        "maxWithExtensionSeconds": 134,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "989",
      "scene": "厨房",
      "name": "厨房_拆装调料架_自定义条件_free_G",
      "props": "调料架、隔层、立柱、调料瓶",
      "actions": "取下、抬起、取出、翻转、清洁、对准、推入、按压、入位、放回",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好调料架，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近调料架。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触调料架，先取下，再抬起，再取出，再翻转，再清洁，再对准，再推入，再按压。",
          "seconds": 55
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把调料架擦净或清理到任务要求状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用隔层配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 92,
        "recommendedSeconds": 134,
        "maxWithExtensionSeconds": 164,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "991",
      "scene": "厨房",
      "name": "厨房_壁挂厨具挂钩架组装_自定义条件_free_G",
      "props": "厨具挂架、挂钩、背板、墙面支架",
      "actions": "推入、卡入、卡扣装配、对位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好厨具挂架，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近厨具挂架。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触厨具挂架，先推入，再卡入，再卡扣装配，再对位。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把厨具挂架处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用挂钩配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 92,
        "maxWithExtensionSeconds": 116,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "995",
      "scene": "厨房",
      "name": "厨房_安装挡水板_自定义条件_free_G",
      "props": "挡水板、水槽",
      "actions": "取出, 对准, 按压, 调整, 拉拽",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好挡水板，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近挡水板。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触挡水板，先取出，再对准，再按压，再调整，再拉拽。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "取出目标物后，关闭或整理挡水板。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用水槽配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 93,
        "maxWithExtensionSeconds": 117,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "996",
      "scene": "厨房",
      "name": "厨房_放回电饭锅内胆_自定义条件_free_G",
      "props": "电饭锅",
      "actions": "按 拉 拿 放 压",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好电饭锅，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近电饭锅。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触电饭锅，先按，再拉，再拿，再放，再压。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把电饭锅盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 90,
        "maxWithExtensionSeconds": 114,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1005",
      "scene": "厨房",
      "name": "厨房_擦丝器多食材粗细擦丝对比_自定义条件_free_G",
      "props": "擦丝器、胡萝卜、餐盘",
      "actions": "抓取、贴合、按压、推拉、收集、清理",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好擦丝器，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近擦丝器。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触擦丝器，先抓取，再贴合，再按压，再推拉，再收集，再清理。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "取出目标物后，关闭或整理擦丝器。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用胡萝卜配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 103,
        "maxWithExtensionSeconds": 133,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1014",
      "scene": "厨房",
      "name": "厨房_过滤大米内杂质存_自定义条件_free_G",
      "props": "大米、筛网、小勺子、保鲜袋",
      "actions": "抓取、倒入、晃动、舀取、收拢、密封",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好大米，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近大米。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触大米，先抓取，再倒入，再晃动，再舀取，再收拢，再密封。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把大米盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用筛网配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 116,
        "maxWithExtensionSeconds": 146,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1017",
      "scene": "厨房",
      "name": "厨房_碾压黑芝麻_自定义条件_free_G",
      "props": "黑芝麻、碾压工具、保鲜袋",
      "actions": "平铺、碾压、收集、装入、密封",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好黑芝麻，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近黑芝麻。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触黑芝麻，先平铺，再碾压，再收集，再装入，再密封。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把黑芝麻盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用碾压工具配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 96,
        "maxWithExtensionSeconds": 120,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1023",
      "scene": "厨房",
      "name": "厨房_垃圾袋套入桶内_自定义条件_free_G",
      "props": "小垃圾桶、垃圾袋",
      "actions": "夹取、抖开、套入、翻折、推",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好小垃圾桶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近小垃圾桶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触小垃圾桶，先夹取，再抖开，再套入，再翻折，再推。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把小垃圾桶处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用垃圾袋配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 93,
        "maxWithExtensionSeconds": 117,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1142",
      "scene": "厨房",
      "name": "厨房_食材加水浸泡定时处理_自定义条件_free_G",
      "props": "水盆、食材、盆盖、机械定时器、清水",
      "actions": "倒水、放入、加盖、转动、定时、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好水盆，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近水盆。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触水盆，先倒水，再放入，再加盖，再转动，再定时，再摆放。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把水盆盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用食材配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 109,
        "maxWithExtensionSeconds": 139,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1143",
      "scene": "厨房",
      "name": "厨房_用研钵捣碎花椒_自定义条件_free_G",
      "props": "研钵、研杵、花椒、调料瓶、刷子",
      "actions": "放入、碾压、破碎、倾斜、倒入、刷洗",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好研钵，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近研钵。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触研钵，先放入，再碾压，再破碎，再倾斜，再倒入，再刷洗。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把研钵放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用研杵配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 119,
        "maxWithExtensionSeconds": 149,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1147",
      "scene": "厨房",
      "name": "厨房_装入保鲜膜盒芯_自定义条件_free_G",
      "props": "保鲜膜盒、新纸芯",
      "actions": "按压、打开、卡入、拉出",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好保鲜膜盒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近保鲜膜盒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触保鲜膜盒，先按压，再打开，再卡入，再拉出。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把保鲜膜盒盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用新纸芯配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 110,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1148",
      "scene": "厨房",
      "name": "厨房_组装裱花嘴_自定义条件_free_G",
      "props": "小刀、裱花袋、裱花嘴",
      "actions": "划开、穿出、拉出、推",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好小刀，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近小刀。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触小刀，先划开，再穿出，再拉出，再推。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把小刀处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用裱花袋配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 113,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1149",
      "scene": "厨房",
      "name": "厨房_用压泥器压土豆泥_自定义条件_free_G",
      "props": "压泥器、熟土豆、碗、刮刀",
      "actions": "放入、手持、对准、旋转、按压、刮下",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好压泥器，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近压泥器。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触压泥器，先放入，再手持，再对准，再旋转，再按压，再刮下。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把压泥器处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用熟土豆配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 106,
        "maxWithExtensionSeconds": 130,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1150",
      "scene": "厨房",
      "name": "厨房_一次性纸杯装箱_自定义条件_free_G",
      "props": "纸杯，纸箱",
      "actions": "动作：捡拾、对齐、投放、封折、推移",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好纸杯，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近纸杯。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触纸杯，先动作：捡拾，再对齐，再投放，再封折，再推移。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把纸杯盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用纸箱配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 93,
        "maxWithExtensionSeconds": 117,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1158",
      "scene": "厨房",
      "name": "厨房_锁紧锅盖把手_自定义条件_free_G",
      "props": "锅盖、把手、螺丝刀",
      "actions": "对准、旋拧、拉动",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好锅盖，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近锅盖。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触锅盖，先对准，再旋拧，再拉动。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把锅盖盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用把手配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 82,
        "maxWithExtensionSeconds": 108,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1163",
      "scene": "厨房",
      "name": "厨房_冰箱除味剂更换_自定义条件_free_G",
      "props": "冰箱、旧除味剂、新除味剂",
      "actions": "打开、取出、撕开、放入、关闭",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好冰箱，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近冰箱。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触冰箱，先打开，再取出，再撕开，再放入，再关闭。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "取出目标物后，关闭或整理冰箱。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用旧除味剂配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 96,
        "maxWithExtensionSeconds": 120,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1166",
      "scene": "厨房",
      "name": "厨房_用食用油涂抹木勺_自定义条件_free_G",
      "props": "木勺、食用油、厨房纸巾",
      "actions": "取出、放置、淋、蘸取、涂抹、翻转、放置",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好木勺，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近木勺。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触木勺，先取出，再放置，再淋，再蘸取，再涂抹，再翻转，再放置。",
          "seconds": 55
        },
        {
          "step": 4,
          "type": "必做",
          "content": "取出目标物后，关闭或整理木勺。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用食用油配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 92,
        "recommendedSeconds": 110,
        "maxWithExtensionSeconds": 134,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1181",
      "scene": "厨房",
      "name": "厨房_碗堆叠收纳_自定义条件_free_G",
      "props": "碗，抹布",
      "actions": "抓取、擦拭、嵌套、调整、平移",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好碗，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近碗。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触碗，先抓取，再擦拭，再嵌套，再调整，再平移。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把碗放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用抹布配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 111,
        "maxWithExtensionSeconds": 141,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "156",
      "scene": "卧室",
      "name": "卧室_衣柜整理关合_自定义条件_free_G",
      "props": "衣柜、衣架、衣物",
      "actions": "悬挂、推拉",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好衣柜，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近衣柜。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触衣柜，先悬挂，再推拉。",
          "seconds": 18
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把衣柜放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用衣架配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 55,
        "recommendedSeconds": 75,
        "maxWithExtensionSeconds": 105,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "157",
      "scene": "卧室",
      "name": "卧室_眼镜入盒归位_自定义条件_free_G",
      "props": "眼镜、眼镜盒",
      "actions": "拿、放入、盖合",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好眼镜，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近眼镜。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触眼镜，先拿，再放入，再盖合。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把眼镜放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用眼镜盒配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 109,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "170",
      "scene": "卧室",
      "name": "卧室_台灯启动操作_自定义条件_free_G",
      "props": "台灯",
      "actions": "模拟按、模拟拧",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好台灯，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近台灯。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触台灯，先模拟按，再模拟拧。",
          "seconds": 18
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把台灯处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 55,
        "recommendedSeconds": 69,
        "maxWithExtensionSeconds": 95,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "172",
      "scene": "卧室",
      "name": "卧室_衣物防尘罩封装_自定义条件_free_G",
      "props": "衣物、防尘罩、拉链、衣架、衣柜",
      "actions": "整理、对齐、放入、拉合、封装、悬挂",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好衣物，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近衣物。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触衣物，先整理，再对齐，再放入，再拉合，再封装，再悬挂。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把衣物放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用防尘罩配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 127,
        "maxWithExtensionSeconds": 157,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "175",
      "scene": "卧室",
      "name": "卧室_鞋子鞋盒整理排列_自定义条件_free_G",
      "props": "鞋子、鞋带、鞋架、鞋柜",
      "actions": "排列、翻转",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好鞋子，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近鞋子。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触鞋子，先排列，再翻转。",
          "seconds": 18
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把鞋子放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用鞋带配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 55,
        "recommendedSeconds": 96,
        "maxWithExtensionSeconds": 126,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "181",
      "scene": "卧室",
      "name": "卧室_枕头套更换封装_自定义条件_free_G",
      "props": "枕头、枕套、床头",
      "actions": "取下、更换、对齐、封装、拉链、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好枕头，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近枕头。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触枕头，先取下，再更换，再对齐，再封装，再拉链，再摆放。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把枕头处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用枕套配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 103,
        "maxWithExtensionSeconds": 133,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "202",
      "scene": "卧室",
      "name": "卧室_耳机线缠绕入盒_自定义条件_free_G",
      "props": "耳机线，收纳盒",
      "actions": "拿 卷 封",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好耳机线，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近耳机线。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触耳机线，先拿，再卷，再封。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把耳机线放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用收纳盒配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 97,
        "maxWithExtensionSeconds": 127,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "203",
      "scene": "卧室",
      "name": "卧室_耳机塞整理装入密封袋_自定义条件_free_G",
      "props": "耳机塞，收纳袋",
      "actions": "拿 打开 封",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好耳机塞，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近耳机塞。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触耳机塞，先拿，再打开，再封。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把耳机塞放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用收纳袋配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 109,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "247",
      "scene": "卧室",
      "name": "卧室_化妆台化妆品整理排列_自定义条件_free_G",
      "props": "化妆台、化妆品、护肤品、收纳盒、抽屉、抹布",
      "actions": "拿、擦拭、分类、排列、收纳",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好化妆台，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近化妆台。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触化妆台，先拿，再擦拭，再分类，再排列，再收纳。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把化妆台放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用化妆品配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 123,
        "maxWithExtensionSeconds": 153,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "257",
      "scene": "卧室",
      "name": "卧室_卧室垃圾桶更换垃圾袋_自定义条件_free_G",
      "props": "垃圾桶、垃圾袋、垃圾站、卧室",
      "actions": "拿、倾倒、更换、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好垃圾桶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近垃圾桶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触垃圾桶，先拿，再倾倒，再更换，再归位。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把垃圾桶放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用垃圾袋配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 102,
        "maxWithExtensionSeconds": 132,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "260",
      "scene": "卧室",
      "name": "卧室_宠物窝整理清洁归位_自定义条件_free_G",
      "props": "宠物窝、宠物垫、刷子、抹布、垃圾桶",
      "actions": "拿、倾倒、清洁、擦拭、整理、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好宠物窝，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近宠物窝。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触宠物窝，先拿，再倾倒，再清洁，再擦拭，再整理，再归位。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把宠物窝放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用宠物垫配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 137,
        "maxWithExtensionSeconds": 167,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "262",
      "scene": "卧室",
      "name": "卧室_卧室窗户玻璃擦拭清洁_自定义条件_free_G",
      "props": "窗户玻璃、玻璃清洁剂、刮水器、抹布、窗框",
      "actions": "打开、擦拭、清理、擦干、关闭",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好窗户玻璃，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近窗户玻璃。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触窗户玻璃，先打开，再擦拭，再清理，再擦干，再关闭。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把窗户玻璃擦净或清理到任务要求状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用玻璃清洁剂配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 120,
        "maxWithExtensionSeconds": 150,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "316",
      "scene": "卧室",
      "name": "卧室_梳妆台规整_自定义条件_free_G",
      "props": "护肤品、收纳盒",
      "actions": "握住、摆正、旋转、推入",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好护肤品，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近护肤品。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触护肤品，先握住，再摆正，再旋转，再推入。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把护肤品放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用收纳盒配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 104,
        "maxWithExtensionSeconds": 134,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "317",
      "scene": "卧室",
      "name": "卧室_脏衣收集打包_自定义条件_free_G",
      "props": "换洗衣物、脏衣收纳袋",
      "actions": "拾取、投放、拉上拉链/捆扎",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好换洗衣物，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近换洗衣物。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触换洗衣物，先拾取，再投放，再拉上拉链，再捆扎。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把换洗衣物处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用脏衣收纳袋配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 110,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "318",
      "scene": "卧室",
      "name": "卧室_防晒衣物打包收纳_自定义条件_free_G",
      "props": "防晒衣、衣物防尘袋",
      "actions": "抓取、展开、折叠、套穿",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好防晒衣，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近防晒衣。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触防晒衣，先抓取，再展开，再折叠，再套穿。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把防晒衣放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用衣物防尘袋配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 116,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "320",
      "scene": "卧室",
      "name": "卧室_围巾卷缠收纳_自定义条件_free_G",
      "props": "围巾、收纳布袋",
      "actions": "拿起、铺平、卷缠、捆扎",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好围巾，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近围巾。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触围巾，先拿起，再铺平，再卷缠，再捆扎。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把围巾放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用收纳布袋配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 104,
        "maxWithExtensionSeconds": 134,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "384",
      "scene": "卧室",
      "name": "卧室_床头柜面垃圾清理物品摆放_自定义条件_free_G",
      "props": "床头柜、垃圾桶、废纸、空瓶、充电器、指甲刀、零食、饮料。",
      "actions": "抓取、丢入、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好床头柜，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近床头柜。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触床头柜，先抓取，再丢入，再摆放。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把床头柜处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用垃圾桶配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 97,
        "maxWithExtensionSeconds": 127,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "429",
      "scene": "卧室",
      "name": "卧室_床面散落杂物归置收纳_自定义条件_free_G",
      "props": "平板、围巾、发饰、垃圾袋",
      "actions": "拿、折叠、挪动、扔",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好平板，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近平板。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触平板，先拿，再折叠，再挪动，再扔。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把平板放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用围巾配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 92,
        "maxWithExtensionSeconds": 122,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "464",
      "scene": "卧室",
      "name": "卧室_衬衫熨烫悬挂_自定义条件_free_G",
      "props": "衬衫、衣架、熨斗、熨烫板",
      "actions": "取下、铺平、滑动、挂起",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好衬衫，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近衬衫。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触衬衫，先取下，再铺平，再滑动，再挂起。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把衬衫处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用衣架配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 92,
        "maxWithExtensionSeconds": 116,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "518",
      "scene": "卧室",
      "name": "卧室_整理化妆刷_自定义条件_free_G",
      "props": "化妆刷，化妆刷包",
      "actions": "打开，整理，关闭，按下",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好化妆刷，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近化妆刷。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触化妆刷，先打开，再整理，再关闭，再按下。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把化妆刷放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用化妆刷包配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 104,
        "maxWithExtensionSeconds": 134,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "519",
      "scene": "卧室",
      "name": "卧室_放置清扫蚊香盒_自定义条件_free_G",
      "props": "蚊香盒，蚊香，刷子",
      "actions": "放置，清扫，拿取，放入，盖合",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好蚊香盒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近蚊香盒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触蚊香盒，先放置，再清扫，再拿取，再放入，再盖合。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把蚊香盒盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用蚊香配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 96,
        "maxWithExtensionSeconds": 126,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "537",
      "scene": "卧室",
      "name": "卧室_台灯旋转调角度后关闭断电_自定义条件_free_G",
      "props": "桌面台灯、电源插座",
      "actions": "旋转、按压、关闭、拔取",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好桌面台灯，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近桌面台灯。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触桌面台灯，先旋转，再按压，再关闭，再拔取。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把桌面台灯处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用电源插座配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 110,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "539",
      "scene": "卧室",
      "name": "卧室_香薰机开盖加精油后开机_自定义条件_free_G",
      "props": "香薰机、精油、梳妆台",
      "actions": "拧开、滴入、盖合、按下",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好香薰机，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近香薰机。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触香薰机，先拧开，再滴入，再盖合，再按下。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把香薰机盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用精油配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 115,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "541",
      "scene": "卧室",
      "name": "卧室_充电插排开关按压断电收纳_自定义条件_free_G",
      "props": "多孔插排、书桌抽屉",
      "actions": "按压、理顺、对折、放入",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好多孔插排，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近多孔插排。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触多孔插排，先按压，再理顺，再对折，再放入。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把多孔插排放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用书桌抽屉配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 104,
        "maxWithExtensionSeconds": 134,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "560",
      "scene": "卧室",
      "name": "卧室_干果定量分装封口夹密封保存_自定义条件_free_G",
      "props": "混合干果、食品分装袋、封口夹、塑料量杯",
      "actions": "舀取、装入、收紧、夹持",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好混合干果，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近混合干果。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触混合干果，先舀取，再装入，再收紧，再夹持。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把混合干果盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用食品分装袋配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 110,
        "maxWithExtensionSeconds": 140,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "562",
      "scene": "卧室",
      "name": "卧室_台灯线材捆扎并通电调试_自定义条件_free_G",
      "props": "台灯、塑料扎带、数据线",
      "actions": "理顺、捆扎、对接、按下",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好台灯，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近台灯。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触台灯，先理顺，再捆扎，再对接，再按下。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把台灯放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用塑料扎带配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 107,
        "maxWithExtensionSeconds": 137,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "567",
      "scene": "卧室",
      "name": "卧室_漏斗辅助灌装小样_自定义条件_free_G",
      "props": "分装瓶、漏斗、爽肤水、标签",
      "actions": "放置、倾倒、取下、旋紧、粘贴",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好分装瓶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近分装瓶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触分装瓶，先放置，再倾倒，再取下，再旋紧，再粘贴。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把分装瓶盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用漏斗配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 127,
        "maxWithExtensionSeconds": 157,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "570",
      "scene": "卧室",
      "name": "卧室_瓶装水调配简易香氛摆件_自定义条件_free_G",
      "props": "花瓶、瓶装水、干果、仿真花、标签纸",
      "actions": "倾倒、舀取、理顺、粘贴",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好花瓶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近花瓶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触花瓶，先倾倒，再舀取，再理顺，再粘贴。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把花瓶放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用瓶装水配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 105,
        "maxWithExtensionSeconds": 135,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "572",
      "scene": "卧室",
      "name": "卧室_灯线缠绕整理_自定义条件_free_G",
      "props": "台灯线、扎带",
      "actions": "弯折、捆扎、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好台灯线，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近台灯线。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触台灯线，先弯折，再捆扎，再摆放。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把台灯线放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用扎带配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 109,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "573",
      "scene": "卧室",
      "name": "卧室_开关床头灯_自定义条件_free_G",
      "props": "台灯、床头柜",
      "actions": "按压、旋转、移动",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好台灯，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近台灯。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触台灯，先按压，再旋转，再移动。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把台灯处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用床头柜配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 103,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "574",
      "scene": "卧室",
      "name": "卧室_调整闹钟时间_自定义条件_free_G",
      "props": "闹钟、床头柜",
      "actions": "抓取、旋转、按压、摆放、摆正",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好闹钟，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近闹钟。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触闹钟，先抓取，再旋转，再按压，再摆放，再摆正。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把闹钟处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用床头柜配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 93,
        "maxWithExtensionSeconds": 123,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "576",
      "scene": "卧室",
      "name": "卧室_整理遥控器_自定义条件_free_G",
      "props": "遥控器、床头柜",
      "actions": "抓取、摆放、对齐、按压",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好遥控器，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近遥控器。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触遥控器，先抓取，再摆放，再对齐，再按压。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把遥控器放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用床头柜配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 116,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "580",
      "scene": "卧室",
      "name": "卧室_按压开合卧室弹盖垃圾桶扔垃圾_自定义条件_free_G",
      "props": "弹盖垃圾桶、化妆废纸、梳妆台",
      "actions": "按压、掀开、投放、摆正、放置",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好弹盖垃圾桶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近弹盖垃圾桶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触弹盖垃圾桶，先按压，再掀开，再投放，再摆正，再放置。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把弹盖垃圾桶放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用化妆废纸配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 114,
        "maxWithExtensionSeconds": 144,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "583",
      "scene": "卧室",
      "name": "卧室_收纳指甲剪套装_自定义条件_free_G",
      "props": "指甲剪套盒、指甲剪、锉刀",
      "actions": "打开、抓取、摆放、盖上、放入",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好指甲剪套盒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近指甲剪套盒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触指甲剪套盒，先打开，再抓取，再摆放，再盖上，再放入。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把指甲剪套盒放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用指甲剪配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 96,
        "maxWithExtensionSeconds": 126,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "584",
      "scene": "卧室",
      "name": "卧室_棉麻收纳袋清洁复用_自定义条件_free_G",
      "props": "收纳袋，毛刷，碎屑",
      "actions": "动作：翻转、扫尘、擦拭",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好收纳袋，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近收纳袋。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触收纳袋，先动作：翻转，再扫尘，再擦拭。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把收纳袋放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用毛刷配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 100,
        "maxWithExtensionSeconds": 130,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "586",
      "scene": "卧室",
      "name": "卧室_睡前读物书签放置_自定义条件_free_G",
      "props": "书本、书签",
      "actions": "打开、翻、抚平、拿、合上、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好书本，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近书本。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触书本，先打开，再翻，再抚平，再拿，再合上，再归位。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把书本放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用书签配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 100,
        "maxWithExtensionSeconds": 130,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "628",
      "scene": "卧室",
      "name": "卧室_床头柜水杯收纳_自定义条件_free_G",
      "props": "塑料饮水杯，纸巾\\抹布，床头柜",
      "actions": "拿，倒，擦，配对，摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好塑料饮水杯，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近塑料饮水杯。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触塑料饮水杯，先拿，再倒，再擦，再配对，再摆放。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把塑料饮水杯放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用纸巾\\抹布配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 114,
        "maxWithExtensionSeconds": 144,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "631",
      "scene": "卧室",
      "name": "卧室_短裤折叠整理_自定义条件_free_G",
      "props": "床、短裤",
      "actions": "动作：拿出、折叠、放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好床，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近床。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触床，先动作：拿出，再折叠，再放。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把床放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用短裤配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 109,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "634",
      "scene": "卧室",
      "name": "卧室_收纳盒倾倒杂物_自定义条件_free_G",
      "props": "收纳盒，刷子，碎屑",
      "actions": "拿，翻转，刷，倒",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好收纳盒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近收纳盒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触收纳盒，先拿，再翻转，再刷，再倒。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把收纳盒放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用刷子配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 107,
        "maxWithExtensionSeconds": 137,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "636",
      "scene": "卧室",
      "name": "卧室_递送眼镜至左手_自定义条件_free_G",
      "props": "近视眼镜、眼镜布、床头柜、眼镜盒",
      "actions": "拿、打开、交接、擦拭、放下",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好近视眼镜，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近近视眼镜。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触近视眼镜，先拿，再打开，再交接，再擦拭，再放下。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把近视眼镜擦净或清理到任务要求状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用眼镜布配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 117,
        "maxWithExtensionSeconds": 147,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "655",
      "scene": "卧室",
      "name": "卧室_按压垃圾袋套桶_自定义条件_free_G",
      "props": "垃圾袋、垃圾桶",
      "actions": "抓取、按压、对准、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好垃圾袋，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近垃圾袋。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触垃圾袋，先抓取，再按压，再对准，再摆放。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把垃圾袋放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用垃圾桶配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 104,
        "maxWithExtensionSeconds": 134,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "656",
      "scene": "卧室",
      "name": "卧室_折叠扭扭棒整理收纳_自定义条件_free_G",
      "props": "扭扭棒、桌面",
      "actions": "抓取、折叠、按压、对齐、堆叠、推动",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好扭扭棒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近扭扭棒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触扭扭棒，先抓取，再折叠，再按压，再对齐，再堆叠，再推动。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把扭扭棒放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用桌面配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 118,
        "maxWithExtensionSeconds": 148,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "926",
      "scene": "卧室",
      "name": "卧室_坐垫靠垫翻转排列_自定义条件_free_G",
      "props": "靠垫、坐垫",
      "actions": "翻转、排列",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好靠垫，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近靠垫。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触靠垫，先翻转，再排列。",
          "seconds": 18
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把靠垫处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用坐垫配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 55,
        "recommendedSeconds": 72,
        "maxWithExtensionSeconds": 102,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "961",
      "scene": "卧室",
      "name": "卧室_固体饮料冲泡_自定义条件_free_G",
      "props": "固体饮料，杯子，保温杯，勺子",
      "actions": "拧，放，拿，倒水，搅拌",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好固体饮料，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近固体饮料。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触固体饮料，先拧，再放，再拿，再倒水，再搅拌。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把固体饮料放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用杯子配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 109,
        "maxWithExtensionSeconds": 139,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "962",
      "scene": "卧室",
      "name": "卧室_积木拼装_自定义条件_free_G",
      "props": "积木，收纳盒",
      "actions": "拿，倒，拼装，摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好积木，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近积木。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触积木，先拿，再倒，再拼装，再摆放。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把积木放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用收纳盒配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 104,
        "maxWithExtensionSeconds": 134,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "969",
      "scene": "卧室",
      "name": "卧室_打包封装帽子和围巾_自定义条件_free_G",
      "props": "帽子、围巾、防尘袋、收纳盒、衣柜",
      "actions": "放入, 折叠, 放入, 拉拽, 系紧, 推",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好帽子，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近帽子。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触帽子，先放入，再折叠，再放入，再拉拽，再系紧，再推。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把帽子放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用围巾配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 127,
        "maxWithExtensionSeconds": 157,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "973",
      "scene": "卧室",
      "name": "卧室_混合液体_自定义条件_free_G",
      "props": "瓶子，碗",
      "actions": "拿，拧，倒，搅拌",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好瓶子，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近瓶子。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触瓶子，先拿，再拧，再倒，再搅拌。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把瓶子放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用碗配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 96,
        "maxWithExtensionSeconds": 126,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "994",
      "scene": "卧室",
      "name": "卧室_清洁衣柜滑轨_自定义条件_free_G",
      "props": "抽屉、滑轨、干布、润滑剂",
      "actions": "拉出, 擦拭, 喷涂, 推拉, 推回",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好抽屉，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近抽屉。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触抽屉，先拉出，再擦拭，再喷涂，再推拉，再推回。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把抽屉擦净或清理到任务要求状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用滑轨配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 117,
        "maxWithExtensionSeconds": 147,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "998",
      "scene": "卧室",
      "name": "卧室_整理衣架_自定义条件_free_G",
      "props": "衣柜、衣架",
      "actions": "拿、挂",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好衣柜，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近衣柜。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触衣柜，先拿，再挂。",
          "seconds": 18
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把衣柜放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用衣架配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 55,
        "recommendedSeconds": 72,
        "maxWithExtensionSeconds": 102,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1000",
      "scene": "卧室",
      "name": "卧室_收纳遥控器_自定义条件_free_G",
      "props": "空调遥控器 床头柜",
      "actions": "拿放拉推",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好空调遥控器，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近空调遥控器。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触空调遥控器，先拿放拉推。",
          "seconds": 18
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把空调遥控器放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用床头柜配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 55,
        "recommendedSeconds": 65,
        "maxWithExtensionSeconds": 95,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1001",
      "scene": "卧室",
      "name": "卧室_衣柜整理_自定义条件_free_G",
      "props": "衣柜、衣服、衣架",
      "actions": "拿、叠、放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好衣柜，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近衣柜。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触衣柜，先拿，再叠，再放。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把衣柜放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用衣服配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 82,
        "maxWithExtensionSeconds": 112,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1004",
      "scene": "卧室",
      "name": "卧室_文具装袋_自定义条件_free_G",
      "props": "文具，笔袋或文具盒",
      "actions": "拉，拿，放，闭合",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好文具，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近文具。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触文具，先拉，再拿，再放，再闭合。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "取出目标物后，关闭或整理文具。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用笔袋或文具盒配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 110,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1007",
      "scene": "卧室",
      "name": "卧室_洗净干发帽卷制收纳装袋_自定义条件_free_G",
      "props": "干发帽、布艺抽绳收纳袋、收纳箱",
      "actions": "铺平、卷、撑开、放入、系紧、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好干发帽，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近干发帽。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触干发帽，先铺平，再卷，再撑开，再放入，再系紧，再摆放。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把干发帽放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用布艺抽绳收纳袋配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 121,
        "maxWithExtensionSeconds": 151,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1013",
      "scene": "卧室",
      "name": "卧室_将吹风机电源线规范绕圈收纳_自定义条件_free_G",
      "props": "吹风机、电源线、魔术贴绑带、支架",
      "actions": "拿起, 绕圈, 束紧, 挂上",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好吹风机，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近吹风机。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触吹风机，先拿起，再绕圈，再束紧，再挂上。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把吹风机放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用电源线配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 92,
        "maxWithExtensionSeconds": 122,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1027",
      "scene": "卧室",
      "name": "卧室_化妆刷清洁归位_自定义条件_free_G",
      "props": "化妆刷、纸巾、密封袋",
      "actions": "按压、拨动、拉开、推",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好化妆刷，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近化妆刷。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触化妆刷，先按压，再拨动，再拉开，再推。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把化妆刷放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用纸巾配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 119,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1028",
      "scene": "卧室",
      "name": "卧室_清洁化妆品_自定义条件_free_G",
      "props": "密封袋、化妆品、小刷子",
      "actions": "拉近、取出、打开、清扫、按压、撑开、放回",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好密封袋，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近密封袋。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触密封袋，先拉近，再取出，再打开，再清扫，再按压，再撑开，再放回。",
          "seconds": 55
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把密封袋盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用化妆品配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 92,
        "recommendedSeconds": 110,
        "maxWithExtensionSeconds": 140,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1141",
      "scene": "卧室",
      "name": "卧室_藤条香薰补充精油_自定义条件_free_G",
      "props": "香薰瓶、藤条、补充液瓶、废纸",
      "actions": "拧开、夹取、放置、抽取、倾倒、旋紧、插入、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好香薰瓶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近香薰瓶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触香薰瓶，先拧开，再夹取，再放置，再抽取，再倾倒，再旋紧，再插入，再摆放。",
          "seconds": 55
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把香薰瓶盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用藤条配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 92,
        "recommendedSeconds": 130,
        "maxWithExtensionSeconds": 160,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1169",
      "scene": "卧室",
      "name": "卧室_拉拽鞋带抽紧_自定义条件_free_G",
      "props": "运动鞋",
      "actions": "捏住、拉拽、打结",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好运动鞋，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近运动鞋。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触运动鞋，先捏住，再拉拽，再打结。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把运动鞋处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 76,
        "maxWithExtensionSeconds": 100,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1173",
      "scene": "卧室",
      "name": "卧室_裤子穿入腰带_自定义条件_free_G",
      "props": "腰带、裤子",
      "actions": "穿入、对齐、拉拽",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好腰带，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近腰带。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触腰带，先穿入，再对齐，再拉拽。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把腰带处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用裤子配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 103,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1187",
      "scene": "卧室",
      "name": "卧室_枕套翻面准备清洗_自定义条件_free_G",
      "props": "枕套、枕芯",
      "actions": "取下、翻面、放置",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好枕套，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近枕套。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触枕套，先取下，再翻面，再放置。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把枕套处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用枕芯配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 103,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "152",
      "scene": "洗手间",
      "name": "洗手间_清洁刷具悬挂归位_自定义条件_free_G",
      "props": "清洁刷具、绑带、挂钩、收纳架",
      "actions": "清洗、悬挂、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好清洁刷具，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近清洁刷具。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触清洁刷具，先清洗，再悬挂，再归位。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把清洁刷具放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用绑带配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 103,
        "maxWithExtensionSeconds": 133,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "153",
      "scene": "洗手间",
      "name": "洗手间_马桶圈粘贴固定_自定义条件_free_G",
      "props": "马桶圈、马桶、双面胶、螺丝、剪刀、水平仪",
      "actions": "调整、对齐、粘贴、固定、按压",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好马桶圈，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近马桶圈。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触马桶圈，先调整，再对齐，再粘贴，再固定，再按压。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把马桶圈处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用马桶配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 105,
        "maxWithExtensionSeconds": 129,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含剪刀类道具，规则变更提示此类任务不要优先做；如必须做，需管理员确认安全和质检口径。",
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "171",
      "scene": "洗手间",
      "name": "洗手间_毛巾折叠悬挂_自定义条件_free_G",
      "props": "毛巾、浴巾、毛巾架、挂钩",
      "actions": "清洗、拧干、折叠、对齐、悬挂、调整",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好毛巾，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近毛巾。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触毛巾，先清洗，再拧干，再折叠，再对齐，再悬挂，再调整。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把毛巾处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用浴巾配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 124,
        "maxWithExtensionSeconds": 154,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "178",
      "scene": "洗手间",
      "name": "洗手间_牙膏挤压取用_自定义条件_free_G",
      "props": "牙膏、牙刷、洗漱台",
      "actions": "挤压、拿、放、盖",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好牙膏，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近牙膏。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触牙膏，先挤压，再拿，再放，再盖。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把牙膏盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用牙刷配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 113,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "186",
      "scene": "洗手间",
      "name": "洗手间_垃圾袋捆绑封口_自定义条件_free_G",
      "props": "垃圾袋、垃圾桶、扎带/绳子",
      "actions": "收拢、系紧、捆绑、封口、提出",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好垃圾袋，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近垃圾袋。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触垃圾袋，先收拢，再系紧，再捆绑，再封口，再提出。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把垃圾袋盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用垃圾桶配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 117,
        "maxWithExtensionSeconds": 141,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "191",
      "scene": "洗手间",
      "name": "洗手间_泵头瓶按压归位_自定义条件_free_G",
      "props": "洗手液瓶、洗面奶瓶",
      "actions": "拿、旋正、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好洗手液瓶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近洗手液瓶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触洗手液瓶，先拿，再旋正，再归位。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把洗手液瓶放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用洗面奶瓶配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 109,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "194",
      "scene": "洗手间",
      "name": "洗手间_清洁用品分装密封_自定义条件_free_G",
      "props": "清洁用品、分装瓶、喷壶、量杯、标签纸、马克笔",
      "actions": "倾倒、倒入、旋紧、贴标、密封、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好清洁用品，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近清洁用品。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触清洁用品，先倾倒，再倒入，再旋紧，再贴标，再密封，再归位。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把清洁用品放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用分装瓶配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 140,
        "maxWithExtensionSeconds": 170,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "211",
      "scene": "洗手间",
      "name": "洗手间_洗手液补充_自定义条件_free_G",
      "props": "洗手液、补充装",
      "actions": "拧开、倾倒、拧紧、放置",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好洗手液，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近洗手液。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触洗手液，先拧开，再倾倒，再拧紧，再放置。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把洗手液盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用补充装配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 96,
        "maxWithExtensionSeconds": 126,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "263",
      "scene": "洗手间",
      "name": "洗手间_洗手台台面清洁擦拭_自定义条件_free_G",
      "props": "洗手台台面、清洁剂、湿布、抹布、垃圾桶",
      "actions": "擦拭、清理、擦干",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好洗手台台面，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近洗手台台面。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触洗手台台面，先擦拭，再清理，再擦干。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把洗手台台面擦净或清理到任务要求状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用清洁剂配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 106,
        "maxWithExtensionSeconds": 136,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "265",
      "scene": "洗手间",
      "name": "洗手间_马桶清洁擦拭消毒_自定义条件_free_G",
      "props": "马桶、洁厕灵、马桶刷、清洁剂、湿布、垃圾桶",
      "actions": "放下、清洁、擦拭、清理、冲水、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好马桶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近马桶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触马桶，先放下，再清洁，再擦拭，再清理，再冲水，再归位。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把马桶放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用洁厕灵配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 130,
        "maxWithExtensionSeconds": 160,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "266",
      "scene": "洗手间",
      "name": "洗手间_浴室玻璃门清洁擦拭_自定义条件_free_G",
      "props": "浴室玻璃门、玻璃清洁剂、刮水器、抹布、门框",
      "actions": "擦拭、清理、擦干",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好浴室玻璃门，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近浴室玻璃门。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触浴室玻璃门，先擦拭，再清理，再擦干。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把浴室玻璃门擦净或清理到任务要求状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用玻璃清洁剂配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 106,
        "maxWithExtensionSeconds": 136,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "267",
      "scene": "洗手间",
      "name": "洗手间_洗漱用品整理排列_自定义条件_free_G",
      "props": "洗漱用品、洗发水、沐浴露、洗面奶、置物架、洗手台、抹布",
      "actions": "拿、擦拭、分类、排列、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好洗漱用品，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近洗漱用品。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触洗漱用品，先拿，再擦拭，再分类，再排列，再归位。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把洗漱用品放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用洗发水配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 126,
        "maxWithExtensionSeconds": 156,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "283",
      "scene": "洗手间",
      "name": "洗手间_毛巾按用途分类悬挂_自定义条件_free_G",
      "props": "洗脸巾、擦手巾、浴巾、挂钩",
      "actions": "拿、分类、悬挂",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好洗脸巾，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近洗脸巾。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触洗脸巾，先拿，再分类，再悬挂。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把洗脸巾处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用擦手巾配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 85,
        "maxWithExtensionSeconds": 109,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "313",
      "scene": "洗手间",
      "name": "洗手间_马桶圈套穿更换_自定义条件_free_G",
      "props": "马桶圈、马桶",
      "actions": "取下、套穿、摆正、居中",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好马桶圈，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近马桶圈。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触马桶圈，先取下，再套穿，再摆正，再居中。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把马桶圈处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用马桶配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 110,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "386",
      "scene": "洗手间",
      "name": "洗手间_肥皂盒清洁与更换_自定义条件_free_G",
      "props": "肥皂盒，清洁布，肥皂",
      "actions": "打开，擦除，更换，盖合",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好肥皂盒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近肥皂盒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触肥皂盒，先打开，再擦除，再更换，再盖合。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把肥皂盒盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用清洁布配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 119,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "387",
      "scene": "洗手间",
      "name": "洗手间_茶壶清洗_自定义条件_free_G",
      "props": "茶壶，水",
      "actions": "打开，倒水，换水，晃动，盖合",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好茶壶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近茶壶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触茶壶，先打开，再倒水，再换水，再晃动，再盖合。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把茶壶盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用水配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 103,
        "maxWithExtensionSeconds": 133,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "415",
      "scene": "洗手间",
      "name": "洗手间_挤压分装沐浴露_自定义条件_free_G",
      "props": "沐浴露原液、分装挤压瓶",
      "actions": "握持、挤压、平移",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好沐浴露原液，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近沐浴露原液。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触沐浴露原液，先握持，再挤压，再平移。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把沐浴露原液放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用分装挤压瓶配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 97,
        "maxWithExtensionSeconds": 127,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "416",
      "scene": "洗手间",
      "name": "洗手间_更换洗手间垃圾袋_自定义条件_free_G",
      "props": "垃圾桶、垃圾袋",
      "actions": "提举、捆扎、套放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好垃圾桶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近垃圾桶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触垃圾桶，先提举，再捆扎，再套放。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "取出目标物后，关闭或整理垃圾桶。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用垃圾袋配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 103,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "421",
      "scene": "洗手间",
      "name": "洗手间_补充卷筒卫生纸_自定义条件_free_G",
      "props": "卷筒卫生纸",
      "actions": "拆开、套放、丢弃",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好卷筒卫生纸，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近卷筒卫生纸。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触卷筒卫生纸，先拆开，再套放，再丢弃。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把卷筒卫生纸处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 76,
        "maxWithExtensionSeconds": 100,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "502",
      "scene": "洗手间",
      "name": "洗手间_电动牙刷头更换_自定义条件_free_G",
      "props": "电动牙刷、旧刷头、新刷头、垃圾桶",
      "actions": "拿起,拔下,对准,按下,扔入",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好电动牙刷，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近电动牙刷。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触电动牙刷，先拿起，再拔下，再对准，再按下，再扔入。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把电动牙刷处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用旧刷头配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 99,
        "maxWithExtensionSeconds": 123,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "503",
      "scene": "洗手间",
      "name": "洗手间_牙膏管挤压使用_自定义条件_free_G",
      "props": "牙膏管、牙刷、牙刷杯",
      "actions": "旋开,挤压,旋紧,摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好牙膏管，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近牙膏管。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触牙膏管，先旋开，再挤压，再旋紧，再摆放。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把牙膏管放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用牙刷配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 119,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "504",
      "scene": "洗手间",
      "name": "洗手间_牙刷冲洗清洁_自定义条件_free_G",
      "props": "牙刷、水龙头、牙杯",
      "actions": "拿起,冲洗,甩干,插入",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好牙刷，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近牙刷。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触牙刷，先拿起，再冲洗，再甩干，再插入。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把牙刷擦净或清理到任务要求状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用水龙头配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 119,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "505",
      "scene": "洗手间",
      "name": "洗手间_玻璃清洁剂喷洒_自定义条件_free_G",
      "props": "玻璃清洁剂、喷头、手、玻璃、台面",
      "actions": "对准,按下,喷洒,松开",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好玻璃清洁剂，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近玻璃清洁剂。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触玻璃清洁剂，先对准，再按下，再喷洒，再松开。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把玻璃清洁剂擦净或清理到任务要求状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用喷头配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 95,
        "maxWithExtensionSeconds": 125,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "506",
      "scene": "洗手间",
      "name": "洗手间_洗手液补充装瓶_自定义条件_free_G",
      "props": "洗手液补充装、洗手液瓶、漏斗",
      "actions": "打开,对准,倒入,旋紧,按压",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好洗手液补充装，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近洗手液补充装。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触洗手液补充装，先打开，再对准，再倒入，再旋紧，再按压。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把洗手液补充装盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用洗手液瓶配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 106,
        "maxWithExtensionSeconds": 136,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "507",
      "scene": "洗手间",
      "name": "洗手间_梳子去除毛发_自定义条件_free_G",
      "props": "梳子、毛发、垃圾桶、洗脸巾",
      "actions": "拿起,挑起,整理,归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好梳子，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近梳子。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触梳子，先拿起，再挑起，再整理，再归位。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把梳子放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用毛发配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 110,
        "maxWithExtensionSeconds": 140,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "542",
      "scene": "洗手间",
      "name": "洗手间_自制浴室清洁喷雾调配_自定义条件_free_G",
      "props": "沐浴露,喷壶,清水",
      "actions": "倾倒,旋紧,摇晃",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好沐浴露，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近沐浴露。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触沐浴露，先倾倒，再旋紧，再摇晃。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把沐浴露盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用喷壶配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 92,
        "maxWithExtensionSeconds": 122,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "588",
      "scene": "洗手间",
      "name": "洗手间_洁厕灵倒入清洁_自定义条件_free_G",
      "props": "洁厕灵、马桶、马桶刷",
      "actions": "打开,倾倒,静置,刷洗",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好洁厕灵，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近洁厕灵。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触洁厕灵，先打开，再倾倒，再静置，再刷洗。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把洁厕灵盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用马桶配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 99,
        "maxWithExtensionSeconds": 129,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "593",
      "scene": "洗手间",
      "name": "洗手间_地漏毛发清理_自定义条件_free_G",
      "props": "地漏盖、地漏、垃圾桶、管道疏通剂",
      "actions": "拿起,捡起,倾倒,盖回",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好地漏盖，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近地漏盖。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触地漏盖，先拿起，再捡起，再倾倒，再盖回。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把地漏盖盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用地漏配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 120,
        "maxWithExtensionSeconds": 150,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "595",
      "scene": "洗手间",
      "name": "洗手间_马桶按钮擦拭消毒_自定义条件_free_G",
      "props": "马桶按钮、马桶、消毒液、抹布",
      "actions": "擦拭,喷洒,清洁,按压,检查",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好马桶按钮，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近马桶按钮。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触马桶按钮，先擦拭，再喷洒，再清洁，再按压，再检查。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把马桶按钮擦净或清理到任务要求状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用马桶配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 117,
        "maxWithExtensionSeconds": 147,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "596",
      "scene": "洗手间",
      "name": "洗手间_擦手巾悬挂归位_自定义条件_free_G",
      "props": "擦手巾、挂钩、台面、洗手台",
      "actions": "拿起,抖开,铺平,悬挂,调整",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好擦手巾，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近擦手巾。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触擦手巾，先拿起，再抖开，再铺平，再悬挂，再调整。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把擦手巾放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用挂钩配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 99,
        "maxWithExtensionSeconds": 129,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "610",
      "scene": "洗手间",
      "name": "洗手间_传递塑料洗手液瓶_自定义条件_free_G",
      "props": "塑料洗手液瓶、置物架",
      "actions": "水平推送、旋转、按压",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好塑料洗手液瓶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近塑料洗手液瓶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触塑料洗手液瓶，先水平推送，再旋转，再按压。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把塑料洗手液瓶处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用置物架配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 103,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "611",
      "scene": "洗手间",
      "name": "洗手间_拉出轻质抽屉_自定义条件_free_G",
      "props": "轻质塑料抽屉、拉手",
      "actions": "拉拽、抬升、推入",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好轻质塑料抽屉，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近轻质塑料抽屉。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触轻质塑料抽屉，先拉拽，再抬升，再推入。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "取出目标物后，关闭或整理轻质塑料抽屉。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用拉手配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 103,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "613",
      "scene": "洗手间",
      "name": "洗手间_按压洗手液泵头_自定义条件_free_G",
      "props": "洗手液、泵头",
      "actions": "按压、松开、按压",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好洗手液，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近洗手液。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触洗手液，先按压，再松开，再按压。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把洗手液处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用泵头配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 103,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "614",
      "scene": "洗手间",
      "name": "洗手间_安装吸盘挂钩_自定义条件_free_G",
      "props": "吸盘挂钩、旋钮、毛巾杆",
      "actions": "按压排气、旋转锁紧、水平插入、拉动测试",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好吸盘挂钩，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近吸盘挂钩。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触吸盘挂钩，先按压排气，再旋转锁紧，再水平插入，再拉动测试。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把吸盘挂钩处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用旋钮配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 113,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "615",
      "scene": "洗手间",
      "name": "洗手间_更换牙刷头_自定义条件_free_G",
      "props": "旧刷头、新刷头、电动牙刷",
      "actions": "拔取、按压插入、旋转校准、按压测试",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好旧刷头，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近旧刷头。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触旧刷头，先拔取，再按压插入，再旋转校准，再按压测试。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把旧刷头处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用新刷头配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 113,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "619",
      "scene": "洗手间",
      "name": "洗手间_整理浴巾_自定义条件_free_G",
      "props": "浴巾、浴巾架",
      "actions": "抓取、对准、悬挂、拉动、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好浴巾，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近浴巾。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触浴巾，先抓取，再对准，再悬挂，再拉动，再摆放。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把浴巾放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用浴巾架配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 111,
        "maxWithExtensionSeconds": 141,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "620",
      "scene": "洗手间",
      "name": "洗手间_整理沐浴球_自定义条件_free_G",
      "props": "沐浴球、挂钩",
      "actions": "抓取、对准、悬挂、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好沐浴球，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近沐浴球。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触沐浴球，先抓取，再对准，再悬挂，再摆放。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把沐浴球放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用挂钩配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 104,
        "maxWithExtensionSeconds": 134,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "652",
      "scene": "洗手间",
      "name": "洗手间_喷壶喷头拆装组装_自定义条件_free_G",
      "props": "一次性小喷壶、洗漱台",
      "actions": "抓取、旋转、取出、对准、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好一次性小喷壶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近一次性小喷壶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触一次性小喷壶，先抓取，再旋转，再取出，再对准，再摆放。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "取出目标物后，关闭或整理一次性小喷壶。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用洗漱台配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 93,
        "maxWithExtensionSeconds": 123,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "654",
      "scene": "洗手间",
      "name": "洗手间_更换牙刷_自定义条件_free_G",
      "props": "牙刷、牙杯、抽屉、收纳盒",
      "actions": "抓取、拉动、取出、插入、递送、推动",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好牙刷，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近牙刷。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触牙刷，先抓取，再拉动，再取出，再插入，再递送，再推动。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "取出目标物后，关闭或整理牙刷。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用牙杯配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 106,
        "maxWithExtensionSeconds": 130,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "787",
      "scene": "洗手间",
      "name": "洗手间_毛巾卷成圆筒摆放_自定义条件_free_G",
      "props": "毛巾、洗漱台",
      "actions": "抓取、对齐、旋转、卷动、排列、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好毛巾，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近毛巾。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触毛巾，先抓取，再对齐，再旋转，再卷动，再排列，再摆放。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把毛巾处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用洗漱台配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 100,
        "maxWithExtensionSeconds": 130,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "797",
      "scene": "洗手间",
      "name": "洗手间_递送归位香皂入盒_自定义条件_free_G",
      "props": "香皂、皂盒",
      "actions": "拿起, 递送, 接住, 放入, 按压, 推",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好香皂，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近香皂。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触香皂，先拿起，再递送，再接住，再放入，再按压，再推。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把香皂放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用皂盒配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 100,
        "maxWithExtensionSeconds": 130,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "974",
      "scene": "洗手间",
      "name": "洗手间_搅拌混合面膜调匀_自定义条件_free_G",
      "props": "面膜粉、调膜碗、清水、调膜棒、刮板、面膜纸",
      "actions": "倒入, 倒入, 旋转, 舀出, 涂抹",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好面膜粉，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近面膜粉。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触面膜粉，先倒入，再倒入，再旋转，再舀出，再涂抹。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把面膜粉放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用调膜碗配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 115,
        "maxWithExtensionSeconds": 145,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1024",
      "scene": "洗手间",
      "name": "洗手间_皂液装入皂液器_自定义条件_free_G",
      "props": "皂液器、补充液瓶",
      "actions": "旋转、倾倒、按压",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好皂液器，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近皂液器。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触皂液器，先旋转，再倾倒，再按压。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把皂液器放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用补充液瓶配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 119,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "190",
      "scene": "阳台",
      "name": "阳台_清洁毛刷扫尘挂置收纳_自定义条件_free_G",
      "props": "",
      "actions": "动作类型：扫、挂",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好目标物，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近目标物。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触目标物，先动作类型：扫，再挂。",
          "seconds": 18
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把目标物放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 55,
        "recommendedSeconds": 66,
        "maxWithExtensionSeconds": 96,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "322",
      "scene": "阳台",
      "name": "阳台_园艺绿植养护整理_自定义条件_free_G",
      "props": "绿植花盆、落叶、园艺抹布",
      "actions": "扫清、扶稳、居中、擦拭、挑出、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好绿植花盆，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近绿植花盆。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触绿植花盆，先扫清，再扶稳，再居中，再擦拭，再挑出，再摆放。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把绿植花盆放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用落叶配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 121,
        "maxWithExtensionSeconds": 151,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "325",
      "scene": "阳台",
      "name": "阳台_遮阳布收纳整理_自定义条件_free_G",
      "props": "遮阳布、储物筐、扎带",
      "actions": "拉动、展开、卷缠、放入",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好遮阳布，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近遮阳布。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触遮阳布，先拉动，再展开，再卷缠，再放入。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把遮阳布放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用储物筐配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 119,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "501",
      "scene": "阳台",
      "name": "阳台_洗衣机启动前准备_自定义条件_free_G",
      "props": "洗衣机、收纳篮、衣服",
      "actions": "打开、拿起、放入、关闭、拧动",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好洗衣机，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近洗衣机。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触洗衣机，先打开，再拿起，再放入，再关闭，再拧动。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把洗衣机放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用收纳篮配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 114,
        "maxWithExtensionSeconds": 144,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "543",
      "scene": "阳台",
      "name": "阳台_阳台窗户清洁_自定义条件_free_G",
      "props": "阳台窗户、玻璃刮、玻璃清洁剂、干抹布",
      "actions": "打开、蘸取、擦拭、刮净、擦干",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好阳台窗户，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近阳台窗户。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触阳台窗户，先打开，再蘸取，再擦拭，再刮净，再擦干。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把阳台窗户擦净或清理到任务要求状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用玻璃刮配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 117,
        "maxWithExtensionSeconds": 147,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "544",
      "scene": "阳台",
      "name": "阳台_原地给绿植浇水_自定义条件_free_G",
      "props": "浇水壶、绿植、花盆、土壤",
      "actions": "拿起、对准、倾斜、浇水、观察、放回、检查、抖动",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好浇水壶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近浇水壶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触浇水壶，先拿起，再对准，再倾斜，再浇水，再观察，再放回，再检查，再抖动。",
          "seconds": 55
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把浇水壶处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用绿植配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 92,
        "recommendedSeconds": 120,
        "maxWithExtensionSeconds": 144,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "557",
      "scene": "阳台",
      "name": "阳台_园艺肥料罐拧紧摆放置物架_自定义条件_free_G",
      "props": "颗粒肥料罐、多层置物架",
      "actions": "旋转、拧紧、平移、对齐",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好颗粒肥料罐，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近颗粒肥料罐。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触颗粒肥料罐，先旋转，再拧紧，再平移，再对齐。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把颗粒肥料罐盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用多层置物架配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 116,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "558",
      "scene": "阳台",
      "name": "阳台_多肉铺面石子均匀铺撒盆土_自定义条件_free_G",
      "props": "多肉铺面石、塑料小勺、多肉盆栽",
      "actions": "舀取、撒入、铺平、放回",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好多肉铺面石，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近多肉铺面石。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触多肉铺面石，先舀取，再撒入，再铺平，再放回。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把多肉铺面石放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用塑料小勺配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 119,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "566",
      "scene": "阳台",
      "name": "阳台_花盆托盘积水倾倒沥干_自定义条件_free_G",
      "props": "陶瓷花盆、塑料接水托盘、垃圾桶",
      "actions": "端起、平移、倾斜、放回",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好陶瓷花盆，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近陶瓷花盆。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触陶瓷花盆，先端起，再平移，再倾斜，再放回。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把陶瓷花盆放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用塑料接水托盘配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 119,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "568",
      "scene": "阳台",
      "name": "阳台_小型耙子疏松板结盆土_自定义条件_free_G",
      "props": "小型松土耙、开花盆栽、帆布工具袋",
      "actions": "插入、耙动、取出、擦拭、放回",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好小型松土耙，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近小型松土耙。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触小型松土耙，先插入，再耙动，再取出，再擦拭，再放回。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把小型松土耙擦净或清理到任务要求状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用开花盆栽配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 114,
        "maxWithExtensionSeconds": 144,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "569",
      "scene": "阳台",
      "name": "阳台_粘毛滚筒清理尼龙晾绳_自定义条件_free_G",
      "props": "粘毛滚筒、尼龙晾衣绳、置物篮、垃圾桶",
      "actions": "滚动擦拭、撕扯、拿起、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好粘毛滚筒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近粘毛滚筒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触粘毛滚筒，先滚动擦拭，再撕扯，再拿起，再摆放。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把粘毛滚筒擦净或清理到任务要求状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用尼龙晾衣绳配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 110,
        "maxWithExtensionSeconds": 140,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "571",
      "scene": "阳台",
      "name": "阳台_多株藤蔓统一牵引固定_自定义条件_free_G",
      "props": "两盆绿萝、攀爬支架、塑料卡扣",
      "actions": "理顺、缠绕、夹持、调整",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好两盆绿萝，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近两盆绿萝。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触两盆绿萝，先理顺，再缠绕，再夹持，再调整。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把两盆绿萝处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用攀爬支架配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 113,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "589",
      "scene": "阳台",
      "name": "阳台_洗衣粉舀取密封_自定义条件_free_G",
      "props": "洗衣粉、收纳盒、勺子、抹布",
      "actions": "打开,舀取,盖合,擦拭",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好洗衣粉，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近洗衣粉。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触洗衣粉，先打开，再舀取，再盖合，再擦拭。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把洗衣粉盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用收纳盒配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 110,
        "maxWithExtensionSeconds": 140,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "612",
      "scene": "阳台",
      "name": "阳台_按压浇水壶喷头_自定义条件_free_G",
      "props": "浇水壶、喷头",
      "actions": "按压、松开、重复按压",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好浇水壶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近浇水壶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触浇水壶，先按压，再松开，再重复按压。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把浇水壶处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用喷头配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 103,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "621",
      "scene": "阳台",
      "name": "阳台_灌装喷壶液_自定义条件_free_G",
      "props": "喷壶、量杯、液肥、水杯",
      "actions": "旋拧打开、舀取倒入、加水、旋紧密封、按压测试",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好喷壶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近喷壶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触喷壶，先旋拧打开，再舀取倒入，再加水，再旋紧密封，再按压测试。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把喷壶盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用量杯配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 109,
        "maxWithExtensionSeconds": 139,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "622",
      "scene": "阳台",
      "name": "阳台_固定花盆托盘_自定义条件_free_G",
      "props": "花盆、托盘、阳台地面",
      "actions": "托举按压、旋转测试、平移放置、推动检查",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好花盆，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近花盆。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触花盆，先托举按压，再旋转测试，再平移放置，再推动检查。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把花盆处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用托盘配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 113,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "624",
      "scene": "阳台",
      "name": "阳台_倾倒洗衣液_自定义条件_free_G",
      "props": "洗衣液瓶、洗衣机料盒",
      "actions": "抓取、倾倒、放置、对准",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好洗衣液瓶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近洗衣液瓶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触洗衣液瓶，先抓取，再倾倒，再放置，再对准。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把洗衣液瓶放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用洗衣机料盒配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 96,
        "maxWithExtensionSeconds": 126,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "625",
      "scene": "阳台",
      "name": "阳台_摆放扫帚_自定义条件_free_G",
      "props": "扫帚、挂钩",
      "actions": "抓取、对准、悬挂、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好扫帚，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近扫帚。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触扫帚，先抓取，再对准，再悬挂，再摆放。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把扫帚放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用挂钩配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 116,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "626",
      "scene": "阳台",
      "name": "阳台_收纳拖把_自定义条件_free_G",
      "props": "拖把、拖把架",
      "actions": "抓取、对准、悬挂、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好拖把，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近拖把。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触拖把，先抓取，再对准，再悬挂，再摆放。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把拖把放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用拖把架配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 116,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "630",
      "scene": "阳台",
      "name": "阳台_花盆整理_自定义条件_free_G",
      "props": "花盆、土壤、垃圾桶",
      "actions": "动作：倒出、叠放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好花盆，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近花盆。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触花盆，先动作：倒出，再叠放。",
          "seconds": 18
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把花盆放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用土壤配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 55,
        "recommendedSeconds": 75,
        "maxWithExtensionSeconds": 105,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "966",
      "scene": "阳台",
      "name": "阳台_清洗鞋面_自定义条件_free_G",
      "props": "洗头膏、鞋刷、毛巾",
      "actions": "蘸取、对准、刷洗、擦去、吸干",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好洗头膏，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近洗头膏。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触洗头膏，先蘸取，再对准，再刷洗，再擦去，再吸干。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把洗头膏擦净或清理到任务要求状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用鞋刷配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 96,
        "maxWithExtensionSeconds": 126,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1015",
      "scene": "阳台",
      "name": "阳台_拖把拆卸更换_自定义条件_free_G",
      "props": "拖把、全新拖布",
      "actions": "掰开、取下、对准、按压、固定、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好拖把，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近拖把。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触拖把，先掰开，再取下，再对准，再按压，再固定，再摆放。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "取出目标物后，关闭或整理拖把。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用全新拖布配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 100,
        "maxWithExtensionSeconds": 130,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1146",
      "scene": "阳台",
      "name": "阳台_用育苗盒播种_自定义条件_free_G",
      "props": "育苗盒、培养土、小铲子、种子",
      "actions": "填入、铲出、放入、填满、抹平",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好育苗盒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近育苗盒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触育苗盒，先填入，再铲出，再放入，再填满，再抹平。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把育苗盒处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用培养土配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 99,
        "maxWithExtensionSeconds": 123,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "158",
      "scene": "书房",
      "name": "书房_保温杯盖旋紧_自定义条件_free_G",
      "props": "保温杯",
      "actions": "拿、旋紧、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好保温杯，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近保温杯。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触保温杯，先拿，再旋紧，再归位。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把保温杯放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 76,
        "maxWithExtensionSeconds": 106,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "168",
      "scene": "书房",
      "name": "书房_台灯开关操作_自定义条件_free_G",
      "props": "台灯",
      "actions": "模拟按、模拟拧",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好台灯，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近台灯。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触台灯，先模拟按，再模拟拧。",
          "seconds": 18
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把台灯处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 55,
        "recommendedSeconds": 69,
        "maxWithExtensionSeconds": 95,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "184",
      "scene": "书房",
      "name": "书房_纸巾盒摆正整理_自定义条件_free_G",
      "props": "纸巾盒、散纸巾",
      "actions": "拿、折叠、塞入、摆正",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好纸巾盒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近纸巾盒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触纸巾盒，先拿，再折叠，再塞入，再摆正。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把纸巾盒放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用散纸巾配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 116,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "197",
      "scene": "书房",
      "name": "书房_笔帽打开插入_自定义条件_free_G",
      "props": "中性笔、笔帽、桌面",
      "actions": "打开、插入、固定、拿、放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好中性笔，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近中性笔。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触中性笔，先打开，再插入，再固定，再拿，再放。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "取出目标物后，关闭或整理中性笔。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用笔帽配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 96,
        "maxWithExtensionSeconds": 120,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "237",
      "scene": "书房",
      "name": "书房_订书机中放入钉子并试按_自定义条件_free_G",
      "props": "订书钉 订书机",
      "actions": "拿 打开 放 合上 按压",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好订书钉，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近订书钉。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触订书钉，先拿，再打开，再放，再合上，再按压。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "取出目标物后，关闭或整理订书钉。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用订书机配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 93,
        "maxWithExtensionSeconds": 117,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "281",
      "scene": "书房",
      "name": "书房_电脑设备灰尘擦拭归位_自定义条件_free_G",
      "props": "电脑、主机、显示器、键盘、鼠标、干抹布、小刷子、书房",
      "actions": "关闭、擦拭、清理、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好电脑，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近电脑。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触电脑，先关闭，再擦拭，再清理，再归位。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把电脑放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用主机配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 122,
        "maxWithExtensionSeconds": 152,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "330",
      "scene": "书房",
      "name": "书房_活页夹分类整理_自定义条件_free_G",
      "props": "活页夹、活页纸、分类标签",
      "actions": "抽取、插入、对齐、扣夹",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好活页夹，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近活页夹。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触活页夹，先抽取，再插入，再对齐，再扣夹。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把活页夹放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用活页纸配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 119,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "339",
      "scene": "书房",
      "name": "书房_桌面绿植养护整理_自定义条件_free_G",
      "props": "绿植盆栽、小镊子、除尘抹布",
      "actions": "挑出、擦拭、握住、移至",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好绿植盆栽，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近绿植盆栽。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触绿植盆栽，先挑出，再擦拭，再握住，再移至。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把绿植盆栽放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用小镊子配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 107,
        "maxWithExtensionSeconds": 137,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "431",
      "scene": "书房",
      "name": "书房_书房地面地毯灰尘杂物清扫_自定义条件_free_G",
      "props": "粘毛器、簸箕、垃圾桶",
      "actions": "拾取、倾倒、滚动、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好粘毛器，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近粘毛器。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触粘毛器，先拾取，再倾倒，再滚动，再归位。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把粘毛器放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用簸箕配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 99,
        "maxWithExtensionSeconds": 129,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "466",
      "scene": "书房",
      "name": "书房_键盘清洁擦拭_自定义条件_free_G",
      "props": "键盘、湿巾",
      "actions": "翻转、擦拭、按压、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好键盘，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近键盘。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触键盘，先翻转，再擦拭，再按压，再归位。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把键盘放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用湿巾配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 104,
        "maxWithExtensionSeconds": 134,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "553",
      "scene": "书房",
      "name": "书房_橡皮清洁装盒入袋_自定义条件_free_G",
      "props": "橡皮、收纳袋、纸",
      "actions": "摩擦,扫拢,拉",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好橡皮，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近橡皮。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触橡皮，先摩擦，再扫拢，再拉。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把橡皮放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用收纳袋配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 100,
        "maxWithExtensionSeconds": 130,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "563",
      "scene": "书房",
      "name": "书房_细绳胶带自制简易纸质书签_自定义条件_free_G",
      "props": "细绳、透明胶带、直尺、彩纸",
      "actions": "缠绕、裁剪、粘贴、修整、夹入",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好细绳，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近细绳。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触细绳，先缠绕，再裁剪，再粘贴，再修整，再夹入。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把细绳处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用透明胶带配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 99,
        "maxWithExtensionSeconds": 123,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "565",
      "scene": "书房",
      "name": "书房_收纳盒粘贴品类区分标签_自定义条件_free_G",
      "props": "彩纸、塑料收纳盒、标签纸",
      "actions": "放入、裁剪、粘贴",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好彩纸，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近彩纸。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触彩纸，先放入，再裁剪，再粘贴。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把彩纸放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用塑料收纳盒配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 82,
        "maxWithExtensionSeconds": 112,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "635",
      "scene": "书房",
      "name": "书房_按压印章盖文件_自定义条件_free_G",
      "props": "空白便签纸、圆形印章、印泥盒、纸巾",
      "actions": "拿、按压、蘸取、擦拭、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好空白便签纸，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近空白便签纸。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触空白便签纸，先拿，再按压，再蘸取，再擦拭，再归位。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把空白便签纸放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用圆形印章配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 117,
        "maxWithExtensionSeconds": 147,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "988",
      "scene": "书房",
      "name": "书房_印章连续盖章_自定义条件_free_G",
      "props": "印章、印泥、白纸、纸巾",
      "actions": "拿起、按压、蘸取、抬起、对准、观察、擦拭、放回",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好印章，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近印章。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触印章，先拿起，再按压，再蘸取，再抬起，再对准，再观察，再擦拭，再放回。",
          "seconds": 55
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把印章盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用印泥配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 92,
        "recommendedSeconds": 138,
        "maxWithExtensionSeconds": 168,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1025",
      "scene": "书房",
      "name": "书房_活页夹装入活页纸_自定义条件_free_G",
      "props": "活页夹、活页纸",
      "actions": "整理、对齐、翻开、穿入、按压、闭合",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好活页夹，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近活页夹。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触活页夹，先整理，再对齐，再翻开，再穿入，再按压，再闭合。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把活页夹放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用活页纸配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 118,
        "maxWithExtensionSeconds": 148,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1157",
      "scene": "书房",
      "name": "书房_装入贴纸至本子_自定义条件_free_G",
      "props": "贴纸、本",
      "actions": "撕下、捏住、按压、合上",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好贴纸，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近贴纸。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触贴纸，先撕下，再捏住，再按压，再合上。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把贴纸处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用本配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 110,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1159",
      "scene": "书房",
      "name": "书房_拉拽胶带座切断胶带_自定义条件_free_G",
      "props": "胶带切割器、胶带",
      "actions": "拉拽、对准、按压、粘贴",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好胶带切割器，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近胶带切割器。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触胶带切割器，先拉拽，再对准，再按压，再粘贴。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把胶带切割器处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用胶带配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 110,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1171",
      "scene": "书房",
      "name": "书房_文件打孔并穿绳固定_自定义条件_free_G",
      "props": "文件数张、打孔器、棉绳",
      "actions": "整理、按压、穿入、打结",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好文件数张，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近文件数张。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触文件数张，先整理，再按压，再穿入，再打结。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把文件数张放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用打孔器配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 107,
        "maxWithExtensionSeconds": 137,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1177",
      "scene": "书房",
      "name": "书房_抽拉按压修正带_自定义条件_free_G",
      "props": "修正带",
      "actions": "按压、水平抽拉、提起",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好修正带，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近修正带。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触修正带，先按压，再水平抽拉，再提起。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把修正带盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 76,
        "maxWithExtensionSeconds": 100,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1186",
      "scene": "书房",
      "name": "书房_书籍收纳_自定义条件_free_G",
      "props": "书籍，书签",
      "actions": "翻转，推，拿，插入",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好书籍，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近书籍。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触书籍，先翻转，再推，再拿，再插入。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把书籍放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用书签配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 116,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1188",
      "scene": "书房",
      "name": "书房_相框照片翻面_自定义条件_free_G",
      "props": "相框、照片",
      "actions": "拿起、取下、翻面、放入、盖上",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好相框，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近相框。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触相框，先拿起，再取下，再翻面，再放入，再盖上。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把相框盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用照片配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 93,
        "maxWithExtensionSeconds": 117,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1189",
      "scene": "书房",
      "name": "书房_文件夹翻页_自定义条件_free_G",
      "props": "文件夹，文件",
      "actions": "拾取、翻面、放置、递送",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好文件夹，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近文件夹。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触文件夹，先拾取，再翻面，再放置，再递送。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把文件夹处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用文件配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 110,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "166",
      "scene": "餐厅",
      "name": "餐厅_餐边柜收集理顺关合_自定义条件_free_G",
      "props": "餐边柜、调料",
      "actions": "收集、理顺、间距、推拉",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好餐边柜，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近餐边柜。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触餐边柜，先收集，再理顺，再间距，再推拉。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把餐边柜处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用调料配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 110,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "196",
      "scene": "餐厅",
      "name": "餐厅_餐桌转盘抽取擦拭居中_自定义条件_free_G",
      "props": "餐桌带转盘、纸巾",
      "actions": "推拉、抽取、擦拭、居中",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好餐桌带转盘，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近餐桌带转盘。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触餐桌带转盘，先推拉，再抽取，再擦拭，再居中。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把餐桌带转盘擦净或清理到任务要求状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用纸巾配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 104,
        "maxWithExtensionSeconds": 134,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "278",
      "scene": "餐厅",
      "name": "餐厅_餐厅酒柜酒水整理排列_自定义条件_free_G",
      "props": "酒柜、酒水、酒杯、瓶塞、开瓶器、抹布、杯架",
      "actions": "拿、擦拭、分类、排列、倒挂、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好酒柜，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近酒柜。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触酒柜，先拿，再擦拭，再分类，再排列，再倒挂，再归位。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把酒柜放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用酒水配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 133,
        "maxWithExtensionSeconds": 163,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "303",
      "scene": "餐厅",
      "name": "餐厅_餐具堆叠收纳_自定义条件_free_G",
      "props": "碗盘、沥水篮、餐柜",
      "actions": "夹取、堆叠、推入",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好碗盘，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近碗盘。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触碗盘，先夹取，再堆叠，再推入。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把碗盘放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用沥水篮配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 82,
        "maxWithExtensionSeconds": 112,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "306",
      "scene": "餐厅",
      "name": "餐厅_储物罐密封整理_自定义条件_free_G",
      "props": "玻璃储物罐、杂粮零食",
      "actions": "拧旋、检查、盖合、居中、摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好玻璃储物罐，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近玻璃储物罐。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触玻璃储物罐，先拧旋，再检查，再盖合，再居中，再摆放。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把玻璃储物罐放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用杂粮零食配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 93,
        "maxWithExtensionSeconds": 123,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "382",
      "scene": "餐厅",
      "name": "餐厅_餐具沥水台擦拭收纳_自定义条件_free_G",
      "props": "抹布，碗筷",
      "actions": "擦拭、抓取、摆放、清洁",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好抹布，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近抹布。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触抹布，先擦拭，再抓取，再摆放，再清洁。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把抹布放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用碗筷配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 104,
        "maxWithExtensionSeconds": 134,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "383",
      "scene": "餐厅",
      "name": "餐厅_粉料罐盖擦净扣合_自定义条件_free_G",
      "props": "粉料罐、纸巾",
      "actions": "抓取、盖合、擦拭",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好粉料罐，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近粉料罐。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触粉料罐，先抓取，再盖合，再擦拭。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把粉料罐盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用纸巾配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 97,
        "maxWithExtensionSeconds": 127,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "394",
      "scene": "餐厅",
      "name": "餐厅_熟鸡蛋取出装盘_自定义条件_free_G",
      "props": "煮蛋器，鸡蛋，餐盘",
      "actions": "开合，拿，放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好煮蛋器，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近煮蛋器。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触煮蛋器，先开合，再拿，再放。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把煮蛋器盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用鸡蛋配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 82,
        "maxWithExtensionSeconds": 106,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "395",
      "scene": "餐厅",
      "name": "餐厅_简易早餐制作_自定义条件_free_G",
      "props": "盒装牛奶，袋装三明治，餐盘",
      "actions": "拿，放，撕开",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好盒装牛奶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近盒装牛奶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触盒装牛奶，先拿，再放，再撕开。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把盒装牛奶处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用袋装三明治配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 82,
        "maxWithExtensionSeconds": 106,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "396",
      "scene": "餐厅",
      "name": "餐厅_夏天冷饮制作_自定义条件_free_G",
      "props": "托盘，（制冰机，冰桶）杯子，饮料",
      "actions": "倾倒，拿，放，铲",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好托盘，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近托盘。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触托盘，先倾倒，再拿，再放，再铲。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把托盘放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用（制冰机配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 102,
        "maxWithExtensionSeconds": 132,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "587",
      "scene": "餐厅",
      "name": "餐厅_花瓶清洗换水_自定义条件_free_G",
      "props": "花瓶、鲜花、水壶",
      "actions": "拿起,倾倒,摇晃,装入,摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好花瓶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近花瓶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触花瓶，先拿起，再倾倒，再摇晃，再装入，再摆放。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把花瓶放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用鲜花配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 106,
        "maxWithExtensionSeconds": 136,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "983",
      "scene": "餐厅",
      "name": "餐厅_组装果盘分层架_自定义条件_free_G",
      "props": "果盘分层架",
      "actions": "拾取、插入、按压、水平放置、旋转对齐",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好果盘分层架，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近果盘分层架。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触果盘分层架，先拾取，再插入，再按压，再水平放置，再旋转对齐。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把果盘分层架处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 90,
        "maxWithExtensionSeconds": 114,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。",
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1178",
      "scene": "餐厅",
      "name": "餐厅_用餐巾环卷起餐巾_自定义条件_free_G",
      "props": "餐巾、餐巾环、餐盘",
      "actions": "平铺、对折、卷起、套入、放置",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好餐巾，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近餐巾。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触餐巾，先平铺，再对折，再卷起，再套入，再放置。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把餐巾处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用餐巾环配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 96,
        "maxWithExtensionSeconds": 120,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "场景必须真实匹配任务标题，不能用明显不对应的集中环境冒充居家场景。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "393",
      "scene": "衣帽间",
      "name": "衣帽间_墨镜清洁收纳_自定义条件_free_G",
      "props": "墨镜、眼镜清洁剂、眼镜布、眼镜盒",
      "actions": "拿取、按压、擦拭",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好墨镜，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近墨镜。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触墨镜，先拿取，再按压，再擦拭。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把墨镜放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用眼镜清洁剂配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 103,
        "maxWithExtensionSeconds": 133,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "467",
      "scene": "衣帽间",
      "name": "衣帽间_西装套防尘罩_自定义条件_free_G",
      "props": "西装、衣架、防尘罩",
      "actions": "取下,套穿,对齐,悬挂,归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好西装，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近西装。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触西装，先取下，再套穿，再对齐，再悬挂，再归位。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把西装放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用衣架配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 96,
        "maxWithExtensionSeconds": 126,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "577",
      "scene": "衣帽间",
      "name": "衣帽间_将袜子放入抽屉_自定义条件_free_G",
      "props": "衣柜带抽屉，袜子",
      "actions": "拿，放，推，拉",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好衣柜带抽屉，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近衣柜带抽屉。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触衣柜带抽屉，先拿，再放，再推，再拉。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把衣柜带抽屉处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用袜子配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 110,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "958",
      "scene": "衣帽间",
      "name": "衣帽间_衣物整理清洁_自定义条件_free_G",
      "props": "衣物、衣架、鸡毛掸子",
      "actions": "悬挂，拿起，拍打",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好衣物，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近衣物。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触衣物，先悬挂，再拿起，再拍打。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把衣物放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用衣架配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 82,
        "maxWithExtensionSeconds": 112,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "959",
      "scene": "衣帽间",
      "name": "衣帽间_皮带领带整理_自定义条件_free_G",
      "props": "皮带、领带、盒子、挂钩、衣架",
      "actions": "拿取、盘卷、悬挂",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好皮带，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近皮带。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触皮带，先拿取，再盘卷，再悬挂。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把皮带放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用领带配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 88,
        "maxWithExtensionSeconds": 118,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1176",
      "scene": "衣帽间",
      "name": "衣帽间_捏合松开衣架夹_自定义条件_free_G",
      "props": "裤架夹子、裤子",
      "actions": "捏合、放入、松开",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好裤架夹子，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近裤架夹子。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触裤架夹子，先捏合，再放入，再松开。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "取出目标物后，关闭或整理裤架夹子。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用裤子配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 103,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "29",
      "scene": "通用",
      "name": "通用_密封袋按压密封_自定义条件_free_G",
      "props": "密封袋、保鲜袋、自封袋、物品、容器、冰箱",
      "actions": "装入、对齐、按压、密封、挤压",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好密封袋，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近密封袋。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触密封袋，先装入，再对齐，再按压，再密封，再挤压。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把密封袋盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用保鲜袋配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 105,
        "maxWithExtensionSeconds": 129,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "30",
      "scene": "通用",
      "name": "通用_玩具小汽车复位_自定义条件_free_G",
      "props": "玩具车",
      "actions": "翻转、滑动、推、复位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好玩具车，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近玩具车。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触玩具车，先翻转，再滑动，再推，再复位。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把玩具车处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 83,
        "maxWithExtensionSeconds": 107,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "32",
      "scene": "通用",
      "name": "通用_宠物粮的拿取与舀取、水碗的拿取摆放_自定义条件_free_G",
      "props": "宠物粮罐、宠物碗、",
      "actions": "拿、打开、舀、放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好宠物粮罐，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近宠物粮罐。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触宠物粮罐，先拿，再打开，再舀，再放。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把宠物粮罐放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用宠物碗配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 116,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "39",
      "scene": "通用",
      "name": "通用_卡通玩偶匹配整理_自定义条件_free_G",
      "props": "小熊，小人等玩偶",
      "actions": "拿，取，解开",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好小熊，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近小熊。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触小熊，先拿，再取，再解开。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把小熊放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用小人等玩偶配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 109,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "40",
      "scene": "通用",
      "name": "通用_绳子系紧打结_自定义条件_free_G",
      "props": "各种绳子、绑带、扎带、鞋带、物品",
      "actions": "系紧、打结、捆绑、固定、调整",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好各种绳子，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近各种绳子。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触各种绳子，先系紧，再打结，再捆绑，再固定，再调整。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把各种绳子处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用绑带配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 102,
        "maxWithExtensionSeconds": 126,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "44",
      "scene": "通用",
      "name": "通用_挂钩挂件整理_自定义条件_free_G",
      "props": "挂钩、袋子",
      "actions": "夹取、排列、挂上",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好挂钩，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近挂钩。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触挂钩，先夹取，再排列，再挂上。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把挂钩放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用袋子配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 109,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "45",
      "scene": "通用",
      "name": "通用_瓶\\罐排列整齐_自定义条件_free_G",
      "props": "瓶、罐",
      "actions": "对齐、排列、推动",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好瓶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近瓶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触瓶，先对齐，再排列，再推动。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把瓶放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用罐配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 109,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "46",
      "scene": "通用",
      "name": "通用_翻花绳理顺收纳_自定义条件_free_G",
      "props": "各色翻花绳",
      "actions": "整理，理顺，拉直，对齐，卷绕，摆放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好各色翻花绳，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近各色翻花绳。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触各色翻花绳，先整理，再理顺，再拉直，再对齐，再卷绕，再摆放。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把各色翻花绳放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 115,
        "maxWithExtensionSeconds": 145,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "50",
      "scene": "通用",
      "name": "通用_保温杯杯盖拆解清洗_自定义条件_free_G",
      "props": "保温杯、水杯、水龙头",
      "actions": "拧开、拆解、冲洗、组装、拧紧",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好保温杯，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近保温杯。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触保温杯，先拧开，再拆解，再冲洗，再组装，再拧紧。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把保温杯盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用水杯配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 96,
        "maxWithExtensionSeconds": 122,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "56",
      "scene": "通用",
      "name": "通用_物品捆绑固定_自定义条件_free_G",
      "props": "各种物品、绑带、绳子、扎带、收纳盒、容器",
      "actions": "对齐、捆绑、固定、分类、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好各种物品，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近各种物品。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触各种物品，先对齐，再捆绑，再固定，再分类，再归位。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把各种物品放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用绑带配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 105,
        "maxWithExtensionSeconds": 135,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "57",
      "scene": "通用",
      "name": "通用_毛根理顺卷缠归位_自定义条件_free_G",
      "props": "毛根条",
      "actions": "理顺，对齐，缠卷",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好毛根条，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近毛根条。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触毛根条，先理顺，再对齐，再缠卷。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把毛根条放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 76,
        "maxWithExtensionSeconds": 106,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "119",
      "scene": "通用",
      "name": "通用_充电头数据线配对理顺归位_自定义条件_free_G",
      "props": "充电头、数据线",
      "actions": "拿、理顺、配对、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好充电头，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近充电头。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触充电头，先拿，再理顺，再配对，再归位。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把充电头放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用数据线配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 116,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "212",
      "scene": "通用",
      "name": "通用_手电筒电池安装_自定义条件_free_G",
      "props": "手电筒",
      "actions": "旋开、装入、旋紧、按压",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好手电筒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近手电筒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触手电筒，先旋开，再装入，再旋紧，再按压。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把手电筒盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 83,
        "maxWithExtensionSeconds": 109,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "231",
      "scene": "通用",
      "name": "通用_迷你瓶排列居中_自定义条件_free_G",
      "props": "迷你瓶模型，收纳盒",
      "actions": "排列、居中、对称、检查",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好迷你瓶模型，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近迷你瓶模型。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触迷你瓶模型，先排列，再居中，再对称，再检查。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把迷你瓶模型放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用收纳盒配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 104,
        "maxWithExtensionSeconds": 134,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "251",
      "scene": "通用",
      "name": "通用_铅笔削尖整理_自定义条件_free_G",
      "props": "铅笔刀，铅笔",
      "actions": "插入、握紧、旋转、露出、取出",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好铅笔刀，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近铅笔刀。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触铅笔刀，先插入，再握紧，再旋转，再露出，再取出。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把铅笔刀放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用铅笔配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 93,
        "maxWithExtensionSeconds": 123,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "327",
      "scene": "通用",
      "name": "通用_假花墙装饰拼贴_自定义条件_free_G",
      "props": "白纸，牛头胶，假花假",
      "actions": "粘贴、分层、交错、立体",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好白纸，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近白纸。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触白纸，先粘贴，再分层，再交错，再立体。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把白纸处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用牛头胶配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 119,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "328",
      "scene": "通用",
      "name": "通用_超轻粘土修补玩具_自定义条件_free_G",
      "props": "超轻粘土、破损玩具、塑形刀",
      "actions": "揉软、包裹、捏合、刻画、修复",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好超轻粘土，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近超轻粘土。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触超轻粘土，先揉软，再包裹，再捏合，再刻画，再修复。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把超轻粘土处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用破损玩具配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 96,
        "maxWithExtensionSeconds": 120,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "334",
      "scene": "通用",
      "name": "通用_密封袋重复使用_自定义条件_free_G",
      "props": "密封袋、枯叶",
      "actions": "打开、翻面、擦拭、晾干",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好密封袋，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近密封袋。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触密封袋，先打开，再翻面，再擦拭，再晾干。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把密封袋盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用枯叶配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 104,
        "maxWithExtensionSeconds": 134,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "337",
      "scene": "通用",
      "name": "通用_彩泥压花拓印_自定义条件_free_G",
      "props": "彩泥、枯叶",
      "actions": "搓圆、压扁、按压、揭开",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好彩泥，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近彩泥。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触彩泥，先搓圆，再压扁，再按压，再揭开。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把彩泥处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用枯叶配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 110,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "345",
      "scene": "通用",
      "name": "通用_假花修剪整理_自定义条件_free_G",
      "props": "假花假草，绿色篮子",
      "actions": "修剪，对齐，卷缠，捆扎，固定，归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好假花假草，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近假花假草。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触假花假草，先修剪，再对齐，再卷缠，再捆扎，再固定，再归位。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把假花假草放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用绿色篮子配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 100,
        "maxWithExtensionSeconds": 130,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "346",
      "scene": "通用",
      "name": "通用_彩纸边角料清理_自定义条件_free_G",
      "props": "彩纸、袋子",
      "actions": "扫拢、折叠、揉团、投放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好彩纸，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近彩纸。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触彩纸，先扫拢，再折叠，再揉团，再投放。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把彩纸处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用袋子配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 110,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "347",
      "scene": "通用",
      "name": "通用_彩纸折角压平_自定义条件_free_G",
      "props": "彩纸、小夹子",
      "actions": "展开、折叠、按压、夹紧",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好彩纸，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近彩纸。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触彩纸，先展开，再折叠，再按压，再夹紧。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把彩纸处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用小夹子配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 110,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "348",
      "scene": "通用",
      "name": "通用_彩纸卷筒成型_自定义条件_free_G",
      "props": "彩纸、铅笔",
      "actions": "卷缠、按压、抽离、插塞",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好彩纸，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近彩纸。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触彩纸，先卷缠，再按压，再抽离，再插塞。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把彩纸盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用铅笔配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 104,
        "maxWithExtensionSeconds": 128,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "353",
      "scene": "通用",
      "name": "通用_牛头胶封口压实_自定义条件_free_G",
      "props": "信封，文件袋，牛头胶",
      "actions": "打开，检查，对齐，按压，压实，密封",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好信封，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近信封。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触信封，先打开，再检查，再对齐，再按压，再压实，再密封。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把信封盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用文件袋配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 121,
        "maxWithExtensionSeconds": 145,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "366",
      "scene": "通用",
      "name": "通用_花盆填土养护_自定义条件_free_G",
      "props": "花盆、营养土、枯叶",
      "actions": "扶稳、舀取、倒入、摆正",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好花盆，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近花盆。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触花盆，先扶稳，再舀取，再倒入，再摆正。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "完成倒入、分装或盛取后，把花盆放稳。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用营养土配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 99,
        "maxWithExtensionSeconds": 129,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "367",
      "scene": "通用",
      "name": "通用_彩泥创意手工_自定义条件_free_G",
      "props": "彩泥、铅笔、展示盘",
      "actions": "抓取、按压、刻出、取出",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好彩泥，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近彩泥。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触彩泥，先抓取，再按压，再刻出，再取出。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "取出目标物后，关闭或整理彩泥。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用铅笔配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 119,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "399",
      "scene": "通用",
      "name": "通用_试管收纳_自定义条件_free_G",
      "props": "试管，收纳箱",
      "actions": "分类、整理、放入、扣紧、捆绑、封装",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好试管，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近试管。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触试管，先分类，再整理，再放入，再扣紧，再捆绑，再封装。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把试管放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用收纳箱配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 118,
        "maxWithExtensionSeconds": 148,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "406",
      "scene": "通用",
      "name": "通用_粘除毛屑粘毛器_自定义条件_free_G",
      "props": "粘毛器、衣物",
      "actions": "取出、滚动、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好粘毛器，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近粘毛器。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触粘毛器，先取出，再滚动，再归位。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把粘毛器放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用衣物配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 97,
        "maxWithExtensionSeconds": 127,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "433",
      "scene": "通用",
      "name": "通用_蓝牙耳机清洁_自定义条件_free_G",
      "props": "蓝牙耳机、小刷子",
      "actions": "拿、打开、清扫、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好蓝牙耳机，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近蓝牙耳机。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触蓝牙耳机，先拿，再打开，再清扫，再归位。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把蓝牙耳机放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用小刷子配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 116,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "513",
      "scene": "通用",
      "name": "通用_遥控器电池安装_自定义条件_free_G",
      "props": "遥控器，电池",
      "actions": "拿，塞，按，归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好遥控器，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近遥控器。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触遥控器，先拿，再塞，再按，再归位。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把遥控器放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用电池配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 116,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "529",
      "scene": "通用",
      "name": "通用_喷雾瓶拆装充装液体_自定义条件_free_G",
      "props": "按压喷雾瓶、清水、稀释清洁剂",
      "actions": "旋拆、灌装、组装、按压测试",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好按压喷雾瓶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近按压喷雾瓶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触按压喷雾瓶，先旋拆，再灌装，再组装，再按压测试。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把按压喷雾瓶擦净或清理到任务要求状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用清水配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 117,
        "maxWithExtensionSeconds": 147,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "535",
      "scene": "通用",
      "name": "通用_毛绒玩具除尘清洁_自定义条件_free_G",
      "props": "毛绒玩具、粘毛器、软毛刷",
      "actions": "滚动、粘除、梳理、恢复",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好毛绒玩具，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近毛绒玩具。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触毛绒玩具，先滚动，再粘除，再梳理，再恢复。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把毛绒玩具擦净或清理到任务要求状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用粘毛器配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 119,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "536",
      "scene": "通用",
      "name": "通用_水彩笔清洗保养_自定义条件_free_G",
      "props": "水彩笔、清水、纸巾",
      "actions": "动作：浸泡、擦拭、吸干、测试",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好水彩笔，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近水彩笔。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触水彩笔，先动作：浸泡，再擦拭，再吸干，再测试。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把水彩笔擦净或清理到任务要求状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用清水配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 107,
        "maxWithExtensionSeconds": 137,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "538",
      "scene": "通用",
      "name": "通用_护肤品瓶盖旋开取放_自定义条件_free_G",
      "props": "瓶装水乳护肤品",
      "actions": "旋开、按压、擦拭瓶口、旋紧、摆正",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好瓶装水乳护肤品，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近瓶装水乳护肤品。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触瓶装水乳护肤品，先旋开，再按压，再擦拭瓶口，再旋紧，再摆正。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把瓶装水乳护肤品盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次局部复擦；干净处不超过2次，脏污处不超过5次。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 108,
        "maxWithExtensionSeconds": 138,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "545",
      "scene": "通用",
      "name": "通用_液体混合_自定义条件_free_G",
      "props": "水瓶，碗，小勺",
      "actions": "拧，倒，搅拌",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好水瓶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近水瓶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触水瓶，先拧，再倒，再搅拌。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把水瓶盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用碗配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 92,
        "maxWithExtensionSeconds": 122,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "546",
      "scene": "通用",
      "name": "通用_积木拆解_自定义条件_free_G",
      "props": "方块积木，袋子",
      "actions": "解扣，倒出，拆解，归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好方块积木，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近方块积木。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触方块积木，先解扣，再倒出，再拆解，再归位。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把方块积木放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用袋子配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 116,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "549",
      "scene": "通用",
      "name": "通用_药盒标签粘贴标记_自定义条件_free_G",
      "props": "标签，药盒，马克笔",
      "actions": "粘贴，按压，标记，归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好标签，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近标签。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触标签，先粘贴，再按压，再标记，再归位。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把标签放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用药盒配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 107,
        "maxWithExtensionSeconds": 137,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "550",
      "scene": "通用",
      "name": "通用_物品开盒取出_自定义条件_free_G",
      "props": "袋子，盒子，物品",
      "actions": "解扣，倒出，取出",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好袋子，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近袋子。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触袋子，先解扣，再倒出，再取出。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "取出目标物后，关闭或整理袋子。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用盒子配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 82,
        "maxWithExtensionSeconds": 106,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "591",
      "scene": "通用",
      "name": "通用_按压开启场景内小夜灯_自定义条件_free_G",
      "props": "感应小夜灯、居家台面",
      "actions": "按压、推拉、调节、摆正、放置",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好感应小夜灯，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近感应小夜灯。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触感应小夜灯，先按压，再推拉，再调节，再摆正，再放置。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把感应小夜灯处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用居家台面配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 93,
        "maxWithExtensionSeconds": 123,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "606",
      "scene": "通用",
      "name": "通用_药膏管身挤压出料_自定义条件_free_G",
      "props": "药膏，棉签",
      "actions": "抓取、按压、挤压、出料、蘸取",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好药膏，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近药膏。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触药膏，先抓取，再按压，再挤压，再出料，再蘸取。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把药膏处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用棉签配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 93,
        "maxWithExtensionSeconds": 117,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "640",
      "scene": "通用",
      "name": "通用_整理挂件服饰_自定义条件_free_G",
      "props": "口罩，帽子等挂件服饰、挂钩",
      "actions": "拿取、悬挂、分别挂放",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好口罩，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近口罩。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触口罩，先拿取，再悬挂，再分别挂放。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把口罩放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用帽子等挂件服饰配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 82,
        "maxWithExtensionSeconds": 112,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "795",
      "scene": "通用",
      "name": "通用_推拉归位收纳袋_自定义条件_free_G",
      "props": "收纳袋、零食空袋、小物品",
      "actions": "拉, 捡出, 整理, 放回, 按压, 推回",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好收纳袋，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近收纳袋。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触收纳袋，先拉，再捡出，再整理，再放回，再按压，再推回。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把收纳袋放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用零食空袋配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 121,
        "maxWithExtensionSeconds": 151,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "975",
      "scene": "通用",
      "name": "通用_搅拌混合胶水_自定义条件_free_G",
      "props": "胶水瓶、纸张、刮板",
      "actions": "拿起, 摇晃, 旋开, 挤出, 涂抹, 按压",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好胶水瓶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近胶水瓶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触胶水瓶，先拿起，再摇晃，再旋开，再挤出，再涂抹，再按压。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把胶水瓶盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用纸张配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 103,
        "maxWithExtensionSeconds": 129,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "976",
      "scene": "通用",
      "name": "通用_折纸_自定义条件_free_G",
      "props": "3张以上正方形彩纸、折纸图纸（可选）散乱在桌面左侧",
      "actions": "折叠、折起",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好3张以上正方形彩纸，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近3张以上正方形彩纸。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触3张以上正方形彩纸，先折叠，再折起。",
          "seconds": 18
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把3张以上正方形彩纸处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用折纸图纸（可选）散乱在桌面左侧配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 55,
        "recommendedSeconds": 72,
        "maxWithExtensionSeconds": 102,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "977",
      "scene": "通用",
      "name": "通用_组装拧螺丝物品_自定义条件_free_G",
      "props": "3套以上散装螺丝、螺母、垫片、螺丝刀",
      "actions": "旋转、转动",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好3套以上散装螺丝，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近3套以上散装螺丝。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触3套以上散装螺丝，先旋转，再转动。",
          "seconds": 18
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把3套以上散装螺丝处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用螺母配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 55,
        "recommendedSeconds": 78,
        "maxWithExtensionSeconds": 104,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "985",
      "scene": "通用",
      "name": "通用_整理指甲刀套装_自定义条件_free_G",
      "props": "指甲刀工具",
      "actions": "插入、插进",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好指甲刀工具，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近指甲刀工具。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触指甲刀工具，先插入，再插进。",
          "seconds": 18
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把指甲刀工具放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 55,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 109,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含剪刀类道具，规则变更提示此类任务不要优先做；如必须做，需管理员确认安全和质检口径。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "990",
      "scene": "通用",
      "name": "通用_药品分装入盒_自定义条件_free_G",
      "props": "药瓶/药罐、分装便携药盒",
      "actions": "动作：打开、分装、拧紧、扣合、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好药瓶，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近药瓶。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触药瓶，先动作：打开，再分装，再拧紧，再扣合，再归位。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把药瓶放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用药罐配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次少量补充、轻晃均匀或封口确认。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 114,
        "maxWithExtensionSeconds": 144,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "993",
      "scene": "通用",
      "name": "通用_更换防撞贴_自定义条件_free_G",
      "props": "防撞贴、门",
      "actions": "取出, 对准, 按压, 调整, 拉拽",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好防撞贴，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近防撞贴。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触防撞贴，先取出，再对准，再按压，再调整，再拉拽。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "取出目标物后，关闭或整理防撞贴。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用门配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 93,
        "maxWithExtensionSeconds": 117,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1016",
      "scene": "通用",
      "name": "通用_推拉纸箱拿放物品_自定义条件_free_G",
      "props": "快递纸箱、玩偶、粘毛滚刷、礼品袋",
      "actions": "推拉、展开、取出、粘除、放入",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好快递纸箱，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近快递纸箱。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触快递纸箱，先推拉，再展开，再取出，再粘除，再放入。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "取出目标物后，关闭或整理快递纸箱。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用玩偶配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 99,
        "maxWithExtensionSeconds": 129,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1018",
      "scene": "通用",
      "name": "通用_保温杯杯带理顺_自定义条件_free_G",
      "props": "保温杯（带杯带）",
      "actions": "挑开、按压、平贴",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好保温杯（带杯带），确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近保温杯（带杯带）。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触保温杯（带杯带），先挑开，再按压，再平贴。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把保温杯（带杯带）处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 76,
        "maxWithExtensionSeconds": 100,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1140",
      "scene": "通用",
      "name": "通用_礼品袋装饰_自定义条件_free_G",
      "props": "礼品袋、玩偶、摆件、密封袋",
      "actions": "推拉、按压、拿取",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好礼品袋，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近礼品袋。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触礼品袋，先推拉，再按压，再拿取。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把礼品袋盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用玩偶配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 85,
        "maxWithExtensionSeconds": 109,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1144",
      "scene": "通用",
      "name": "通用_装入卡片至卡套_自定义条件_free_G",
      "props": "玄关台面、门禁卡、卡套、挂钩",
      "actions": "撑开卡套开口、卡片滑入内部、按压闭合密封条、挂在挂钩上",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好玄关台面，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近玄关台面。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触玄关台面，先撑开卡套开口，再卡片滑入内部，再按压闭合密封条，再挂在挂钩上。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把玄关台面盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用门禁卡配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 92,
        "maxWithExtensionSeconds": 116,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1145",
      "scene": "通用",
      "name": "通用_组装扫帚延长杆_自定义条件_free_G",
      "props": "扫帚短柄、延长杆配件",
      "actions": "插入、旋转、立起",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好扫帚短柄，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近扫帚短柄。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触扫帚短柄，先插入，再旋转，再立起。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把扫帚短柄处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用延长杆配件配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 103,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1152",
      "scene": "通用",
      "name": "通用_用墨囊给钢笔换墨_自定义条件_free_G",
      "props": "钢笔、墨囊",
      "actions": "旋开、拔出、对准、插入、听到、旋回",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好钢笔，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近钢笔。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触钢笔，先旋开，再拔出，再对准，再插入，再听到，再旋回。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把钢笔处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用墨囊配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 100,
        "maxWithExtensionSeconds": 124,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1153",
      "scene": "通用",
      "name": "通用_用活页本增减内页_自定义条件_free_G",
      "props": "活页本、活页纸、贴纸",
      "actions": "打开、取下、装入、粘贴、合环",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好活页本，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近活页本。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触活页本，先打开，再取下，再装入，再粘贴，再合环。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "取出目标物后，关闭或整理活页本。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用活页纸配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 96,
        "maxWithExtensionSeconds": 120,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1154",
      "scene": "通用",
      "name": "通用_用自粘书皮包课本_自定义条件_free_G",
      "props": "自粘书皮、课本",
      "actions": "撕开、贴、抚平、折入、压粘",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好自粘书皮，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近自粘书皮。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触自粘书皮，先撕开，再贴，再抚平，再折入，再压粘。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把自粘书皮处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用课本配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 93,
        "maxWithExtensionSeconds": 117,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1155",
      "scene": "通用",
      "name": "通用_用叠衣板辅助叠T恤_自定义条件_free_G",
      "props": "叠衣板、T恤",
      "actions": "平铺、翻折、包裹、抽出",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好叠衣板，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近叠衣板。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触叠衣板，先平铺，再翻折，再包裹，再抽出。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把叠衣板处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用T恤配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 86,
        "maxWithExtensionSeconds": 110,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1156",
      "scene": "通用",
      "name": "通用_将奶嘴套入奶瓶旋紧_自定义条件_free_G",
      "props": "奶嘴、瓶盖、奶瓶、防尘罩",
      "actions": "穿出、对准、旋紧、盖上、摇晃",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好奶嘴，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近奶嘴。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触奶嘴，先穿出，再对准，再旋紧，再盖上，再摇晃。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把奶嘴盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用瓶盖配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 99,
        "maxWithExtensionSeconds": 125,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1160",
      "scene": "通用",
      "name": "通用_拉拽卷纸撕断_自定义条件_free_G",
      "props": "卷纸",
      "actions": "拉拽、撕断、对折",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好卷纸，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近卷纸。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触卷纸，先拉拽，再撕断，再对折。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把卷纸处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 76,
        "maxWithExtensionSeconds": 100,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1161",
      "scene": "通用",
      "name": "通用_盆栽养护_自定义条件_free_G",
      "props": "绿植、水杯",
      "actions": "检查、浇灌、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好绿植，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近绿植。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触绿植，先检查，再浇灌，再归位。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把绿植放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用水杯配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 79,
        "maxWithExtensionSeconds": 109,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [
        "含涉水/倾倒动作，规则变更提示涉水类任务不要优先做；如必须做，需控制水量并防止设备风险。"
      ],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1162",
      "scene": "通用",
      "name": "通用_地毯毛球修整_自定义条件_free_G",
      "props": "刮毛刀、粘毛器、地毯",
      "actions": "刮除、粘取、铺平",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好刮毛刀，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近刮毛刀。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触刮毛刀，先刮除，再粘取，再铺平。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把刮毛刀处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用粘毛器配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 82,
        "maxWithExtensionSeconds": 106,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1165",
      "scene": "通用",
      "name": "通用_用画筒装画_自定义条件_free_G",
      "props": "画筒、画卷、背带",
      "actions": "旋开、插入、盖上、调节",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好画筒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近画筒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触画筒，先旋开，再插入，再盖上，再调节。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把画筒盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用画卷配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 89,
        "maxWithExtensionSeconds": 113,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1167",
      "scene": "通用",
      "name": "通用_用硅胶保护套套住遥控器_自定义条件_free_G",
      "props": "硅胶保护套、遥控器",
      "actions": "插入、拉伸、覆盖、调整、按压",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好硅胶保护套，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近硅胶保护套。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触硅胶保护套，先插入，再拉伸，再覆盖，再调整，再按压。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把硅胶保护套盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用遥控器配合完成一次辅助整理。",
          "seconds": 10
        },
        {
          "type": "可选",
          "content": "轻压、轻推或轻拉一次，确认已经合上或固定。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 93,
        "maxWithExtensionSeconds": 117,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1172",
      "scene": "通用",
      "name": "通用_卷尺测量物体长度_自定义条件_free_G",
      "props": "卷尺",
      "actions": "按压、拉拽、收回",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好卷尺，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近卷尺。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触卷尺，先按压，再拉拽，再收回。",
          "seconds": 24
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把卷尺处理到任务要求的完成状态。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次位置、方向、开合或收纳状态检查。",
          "seconds": 12
        }
      ],
      "duration": {
        "minimumSeconds": 61,
        "recommendedSeconds": 76,
        "maxWithExtensionSeconds": 100,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "1180",
      "scene": "通用",
      "name": "通用_收纳盒物品整理_自定义条件_free_G",
      "props": "夹子、橡皮、笔,收纳盒",
      "actions": "取出、堆叠、对齐、归位",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好夹子，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近夹子。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触夹子，先取出，再堆叠，再对齐，再归位。",
          "seconds": 32
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把夹子放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        },
        {
          "type": "可选",
          "content": "用橡皮配合完成一次辅助整理。",
          "seconds": 10
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 69,
        "recommendedSeconds": 110,
        "maxWithExtensionSeconds": 140,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "198",
      "scene": "测试上线认证",
      "name": "测试上线认证_综合考核3_自定义条件_test",
      "props": "",
      "actions": "叠、夹、绕、推、拉",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好抽屉，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近抽屉。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触抽屉，先叠，再夹，再绕，再推，再拉。",
          "seconds": 40
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把抽屉放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        }
      ],
      "duration": {
        "minimumSeconds": 77,
        "recommendedSeconds": 105,
        "maxWithExtensionSeconds": 135,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "199",
      "scene": "测试上线认证",
      "name": "测试上线认证_综合考核1_自定义条件_test",
      "props": "",
      "actions": "拿、分类、放入、拧、舀、盖",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好盘，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近盘。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触盘，先拿，再分类，再放入，再拧，再舀，再盖。",
          "seconds": 48
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把盘盖好、扣好或封好。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 85,
        "recommendedSeconds": 94,
        "maxWithExtensionSeconds": 124,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    },
    {
      "id": "200",
      "scene": "测试上线认证",
      "name": "测试上线认证_综合考核2_自定义条件_test",
      "props": "",
      "actions": "拿、折叠、塞入、摆正、拧、挤、盖",
      "mandatorySteps": [
        {
          "step": 1,
          "type": "必做",
          "content": "摆好纸巾盒，确认画面只保留任务相关物品。",
          "seconds": 8
        },
        {
          "step": 2,
          "type": "必做",
          "content": "夹爪闭合，从上向下画弧线靠近纸巾盒。",
          "seconds": 8
        },
        {
          "step": 3,
          "type": "必做",
          "content": "夹取或接触纸巾盒，先拿，再折叠，再塞入，再摆正，再拧，再挤，再盖。",
          "seconds": 55
        },
        {
          "step": 4,
          "type": "必做",
          "content": "把纸巾盒放回指定位置并整理到位。",
          "seconds": 14
        },
        {
          "step": 5,
          "type": "必做",
          "content": "夹爪闭合停稳，确认没有碰撞、遮挡和多余物品。",
          "seconds": 7
        }
      ],
      "optionalSteps": [
        {
          "type": "可选",
          "content": "轻微调整目标物朝向，让下一步更顺手。",
          "seconds": 8
        }
      ],
      "extensionSteps": [
        {
          "type": "延时",
          "content": "增加一次分类、对齐或归位微调。",
          "seconds": 18
        },
        {
          "type": "延时",
          "content": "增加一次旋紧或旋松确认；拧紧后不要反复超过3次。",
          "seconds": 14
        }
      ],
      "duration": {
        "minimumSeconds": 92,
        "recommendedSeconds": 101,
        "maxWithExtensionSeconds": 131,
        "ruleLimit": "单条不得低于40秒，不得高于4分钟；建议控制在推荐时长附近。"
      },
      "riskFlags": [],
      "redlineChecklist": [
        "不得静止超过2秒，动作之间必须连续。",
        "每条视频至少包含两个及以上有效动作，不能只做简单抓取。",
        "起始动作必须以弧线接近目标物。",
        "未夹取物品时夹爪保持闭合，避免夹爪打开空悬。",
        "夹爪之间保持距离，避免碰撞、过近或互相遮挡。",
        "画面中不得出现人或目标物以外的明显无关物品。",
        "不得为了延长时长做无意义重复或不符合生活逻辑的动作。"
      ]
    }
  ]
};
