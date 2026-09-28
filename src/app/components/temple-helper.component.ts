import { Component, ElementRef, HostListener, ViewChild, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { helperCopy, helperTopics, type HelperTopic } from '../data/helper-content';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-temple-helper',
  standalone: true,
  imports: [RouterLink],
  template: `
    @let locale = lang.lang();
    @let copy = helperCopy[locale];
    @let topicsAsked = askedTopics();
    @let waiting = pending();

    <div class="helper-bot" [attr.aria-label]="copy.aria">
      @if (open()) {
        <div
          class="helper-window"
          role="dialog"
          aria-modal="false"
          [attr.aria-labelledby]="'helper-bot-title'">
          <div class="helper-window-head">
            <span class="helper-avatar">
              <img src="assets/images/nandi-maharaj.png" alt="" width="40" height="40">
            </span>
            <div class="helper-window-identity">
              <strong id="helper-bot-title">{{ copy.botName }}</strong>
              <small>{{ copy.botStatus }}</small>
            </div>
            <button
              type="button"
              class="helper-icon-btn"
              [attr.aria-label]="copy.closeLabel"
              (click)="close()">
              ×
            </button>
          </div>

          <div #thread class="helper-thread" aria-live="polite">
            <div class="helper-row">
              <span class="helper-avatar helper-avatar-sm">
                <img src="assets/images/nandi-maharaj.png" alt="" width="28" height="28">
              </span>
              <div class="helper-bubble helper-bubble-bot">
                @for (line of copy.greeting; track line) {
                  <p>{{ line }}</p>
                }
              </div>
            </div>

            @for (topic of topicsAsked; track $index) {
              <div class="helper-bubble helper-bubble-user">
                <p>{{ topic.question[locale] }}</p>
              </div>
              @if (waiting && $last) {
                <div class="helper-row">
                  <span class="helper-avatar helper-avatar-sm">
                    <img src="assets/images/nandi-maharaj.png" alt="" width="28" height="28">
                  </span>
                  <div class="helper-bubble helper-bubble-bot helper-typing" aria-hidden="true">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              } @else {
                <div class="helper-row">
                  <span class="helper-avatar helper-avatar-sm">
                    <img src="assets/images/nandi-maharaj.png" alt="" width="28" height="28">
                  </span>
                  <div class="helper-bubble helper-bubble-bot">
                    @for (line of topic.answer; track $index) {
                      <p>{{ line[locale] }}</p>
                    }
                    <a
                      [routerLink]="topic.link"
                      [fragment]="topic.linkFragment"
                      class="text-link"
                      (click)="close()">
                      {{ topic.linkLabel[locale] }}
                    </a>
                  </div>
                </div>
              }
            }
          </div>

          <div class="helper-composer">
            <p class="helper-prompt">{{ copy.prompt }}</p>
            <div class="helper-chips" role="group" [attr.aria-label]="copy.prompt">
              @for (topic of topics; track topic.id) {
                <button
                  type="button"
                  class="helper-chip"
                  [class.active]="lastAskedId() === topic.id"
                  [attr.aria-pressed]="lastAskedId() === topic.id"
                  [disabled]="waiting"
                  (click)="ask(topic)">
                  {{ topic.question[locale] }}
                </button>
              }
            </div>
          </div>
        </div>
      }

      <div class="helper-dock">
        <button
          type="button"
          class="helper-launcher"
          [attr.aria-label]="open() ? copy.closeLabel : copy.openLabel"
          [attr.aria-expanded]="open()"
          (click)="toggle()">
          @if (open()) {
            <span aria-hidden="true">×</span>
          } @else {
            <img src="assets/images/nandi-maharaj.png" alt="" width="54" height="54">
          }
        </button>

        @if (!open()) {
          <p class="helper-hint">{{ copy.hint }}</p>
        }
      </div>
    </div>
  `
})
export class TempleHelperComponent {
  @ViewChild('thread') private thread?: ElementRef<HTMLElement>;

  readonly lang = inject(LanguageService);
  readonly helperCopy = helperCopy;
  readonly topics = helperTopics;
  readonly open = signal(false);
  readonly pending = signal(false);
  readonly askedIds = signal<string[]>([]);
  readonly askedTopics = computed(() =>
    this.askedIds()
      .map((id) => this.topics.find((topic) => topic.id === id))
      .filter((topic): topic is HelperTopic => !!topic)
  );
  readonly lastAskedId = computed(() => {
    const ids = this.askedIds();
    return ids[ids.length - 1] ?? null;
  });

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.open()) {
      this.close();
    }
  }

  toggle(): void {
    if (this.open()) {
      this.close();
      return;
    }
    this.open.set(true);
    this.scrollThread();
  }

  close(): void {
    this.open.set(false);
  }

  ask(topic: HelperTopic): void {
    if (this.pending()) {
      return;
    }
    const ids = this.askedIds();
    if (ids[ids.length - 1] === topic.id) {
      return;
    }

    this.askedIds.update((current) => [...current, topic.id]);
    this.pending.set(true);
    this.scrollThread();

    const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 450;
    window.setTimeout(() => {
      this.pending.set(false);
      this.scrollThread();
    }, delay);
  }

  private scrollThread(): void {
    queueMicrotask(() => {
      const el = this.thread?.nativeElement;
      el?.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    });
  }
}
