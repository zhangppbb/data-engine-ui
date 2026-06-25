declare namespace Api {
  namespace Policy {
    // 政策解读参数
    interface InterpretPolicyParams {
      /**
       * 政策 ID
       */
      policyId: string;
      /**
       * 解读文本
       */
      policyText: string;

      /**
       * 解读标题
       */
      policyTitle: string;

      /**
       * 上次对话ID
       */
      sessionId?: string;
    }

    // 政策解读
    interface InterpretPolicy {
      /**
       * 解读文本
       */
      data: {
        /**
         * 解读文本
         */
        interpretation: string;
        session_id: string;
        session_status: string;
      };
    }
  }
}
