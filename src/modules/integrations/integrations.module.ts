import { Module } from '@nestjs/common';
import { HttpService } from './http.service';
import { GmailService } from './gmail.service';
import { SlackService } from './slack.service';
import { NotionService } from './notion.service';
import { WebhookService } from './webhook.service';

@Module({
  providers: [HttpService, GmailService, SlackService, NotionService, WebhookService],
  exports: [HttpService, GmailService, SlackService, NotionService, WebhookService],
})
export class IntegrationsModule {}