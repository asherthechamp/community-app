import { BrowserHelper } from "topcoder-testing-lib";
import { LoginPageHelper } from "../page-objects/pages/topcoder/login/login.helper";
import { ConfigHelper } from "../utils/config-helper";
import { ForumPageHelper } from "../page-objects/pages/topcoder/settings/preferences/forum/forum.helper";
import { PaymentPageHelper } from "../page-objects/pages/topcoder/settings/preferences/payment/payment.helper";

describe("Topcoder Preferences Page Tests: ", () => {
  /**
   * Sets up the browser and logs in
   */
  beforeAll(async () => {
    await BrowserHelper.initialize();
    await LoginPageHelper.open();
    await LoginPageHelper.login(
      ConfigHelper.getUserName(),
      ConfigHelper.getPassword()
    );
  });

  /**
   * Logs out
   */
  afterAll(async () => {
    try {
      await LoginPageHelper.logout();
    } catch (e) {
      await BrowserHelper.restart();
    }
  });

  /**
   * Verifies that user is redirected to the forum settings page on switching to the Forum tab
   */
  it("should verify User can redirect to forums's setting page", async () => {
    await ForumPageHelper.open();
    await ForumPageHelper.verifyForumSetting();
  });

  /**
   * Verifies that user is redirected to the payment settings page on switching to the Payment tab
   */
  it("should verify User can redirect to payment setting page", async () => {
    await PaymentPageHelper.open();
    await PaymentPageHelper.verifyPaymentSetting();
  });
});